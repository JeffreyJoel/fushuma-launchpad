"use client";
import Container from "@/components/atoms/Container";
import React, { useEffect, useState } from "react";
import PageCard from "@/components/PageCard";
import Preloader from "@/components/atoms/Preloader";
import Card from "./Card";
import Details from "./Details";
import { Address, ICODetails } from "@/config/types/launchpadTypes";
import { useAccount } from "wagmi";
import { fetchAllICOs } from "@/helpers/launchpadFunctions"; 

export interface Launchpad {
  logo: string;
  minDescription: string;
  saleType: string;
  chains: Record<
    number,
    {
      tokenAddress: Address;
      icoContract: Address;
      currencies: {
        useNativeAsPayment: boolean;
        nativePrice: number;
        tokens?: [
          { token: { symbol: string; address: string }; price: number }
        ];
      };
    }
  >;
}

interface LaunchpadItem {
  launchpad: Launchpad;
  icoId: bigint;
}

type CardState = {
  index: number;
  state: string;
};

export default function LaunchpadPage() {
  const { chainId } = useAccount() as { chainId: number };
  const [details, setDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOccurred, setErrorOccurred] = useState<boolean>(false);
  const [launchpads, setLaunchpads] = useState<LaunchpadItem[]>([]);
  const [cardsState, setCardsState] = useState<CardState[]>([]);

  // Load ICOs using the new function.
  useEffect(() => {
    async function loadICOs() {
      try {
        const icos: ICODetails[] = await fetchAllICOs();

        const transformedLaunchpads = icos.map((ico) => {
          const isNativePayment =
            ico.params.paymentToken ===
            "0x0000000000000000000000000000000000000000";
          const chainConfig: Record<
            number,
            {
              tokenAddress: Address;
              icoContract: Address;
              currencies: {
                useNativeAsPayment: boolean;
                nativePrice: number;
                tokens?: [
                  { token: { symbol: string; address: string }; price: number }
                ];
              };
            }
          > = {
            [chainId]: {
              tokenAddress: ico.params.token,
              icoContract: ico.state.ICOOwner, 
              currencies: {
                useNativeAsPayment: isNativePayment,
                nativePrice: Number(ico.params.startPrice),
              },
            },
          };

          if (!isNativePayment) {
            chainConfig[chainId].currencies.tokens = [
              {
                token: {
                  symbol: "TOKEN", 
                  address: ico.params.paymentToken,
                },
                price: Number(ico.params.startPrice),
              },
            ];
          }

          return {
            launchpad: {
              logo: "/default-logo.png",
              minDescription: "Participate in this token sale",
              saleType: "ICO",
              chains: chainConfig,
            },
            icoId: ico.id,
          } as LaunchpadItem;
        });
        setLaunchpads(transformedLaunchpads);
        setLoading(false);
      } catch (error) {
        console.error("Error occurred while fetching ICOs:", error);
        setErrorOccurred(true);
        setLoading(false);
      }
    }
    loadICOs();
  }, [chainId]);

  // Categorize cards based on their state.
  useEffect(() => {
    async function categorizeByState() {
      const updatedLiveList: LaunchpadItem[] = [];
      const updatedSoonList: LaunchpadItem[] = [];
      const updatedEndedList: LaunchpadItem[] = [];

      for (let i = 0; i < launchpads.length; i++) {
        const launchpad = launchpads[i];
        try {
          const state = cardsState.find((card) => card.index === i)?.state;
          switch (state) {
            case "Soon":
              updatedSoonList.push(launchpad);
              break;
            case "Live":
              updatedLiveList.push(launchpad);
              break;
            case "Ended":
              updatedEndedList.push(launchpad);
              break;
            default:
              break;
          }
        } catch (err) {
          console.error(
            "Error occurred while processing launchpad state:",
            err
          );
        }
      }

      const sortedLaunchpads = [
        ...updatedLiveList,
        ...updatedSoonList,
        ...updatedEndedList,
      ];

      if (sortedLaunchpads.length > 0) {
        setLaunchpads(sortedLaunchpads);
      }
    }

    if (cardsState.length === launchpads.length && launchpads.length > 0) {
      try {
        categorizeByState();
      } catch (err) {
        setErrorOccurred(true);
        console.error("Error occurred in card state processing:", err);
      }
    }
  }, [cardsState, launchpads.length]);

  const detailsClickHandler = () => {
    setDetails(null);
  };

  const handleDataFromCard = (data: any) => {
    setDetails(data);
  };

  const handleCardState = (state: CardState) => {
    const listOfStates = [...cardsState];
    listOfStates[state.index] = state;
    setCardsState(listOfStates);
  };

  const renderContent = () => {
    if (errorOccurred) {
      return (
        <PageCard>
          <p>
            An error occurred while loading the launchpads. Please refresh the
            page.
          </p>
        </PageCard>
      );
    }

    if (loading) {
      return (
        <PageCard>
          <div style={{ margin: "100px auto" }}>
            <Preloader />
          </div>
        </PageCard>
      );
    }

    if (details) {
      return <Details onClick={detailsClickHandler}>{details}</Details>;
    }

    return (
      <PageCard>
        <h2 className="launchpad-list-heading mt-0">Available Launchpads</h2>
        {launchpads.length > 0 ? (
          <ul className="launchpads-list" style={{ margin: "0 auto" }}>
            {launchpads.map((item, index) => (
              <Card
                key={`Card.${item.launchpad?.chains[chainId]?.tokenAddress}`}
                onClick={handleDataFromCard}
                cardState={handleCardState}
                cardIndex={index}
                icoId={item.icoId}
              >
                {item.launchpad}
              </Card>
            ))}
          </ul>
        ) : (
          <p className="text-center py-8">
            No active launchpads available at the moment.
          </p>
        )}
      </PageCard>
    );
  };

  return (
    <div className={!loading && !errorOccurred ? "" : "no-launchpads"}>
      <Container>
        <div className="w-full mx-auto my-5">{renderContent()}</div>
      </Container>
    </div>
  );
}
