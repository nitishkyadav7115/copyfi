import Utility from "../Utilities/Utility";
import "./AboutCopyFi.css";
import airdrop from "../../assets/utilities/airdrop-64.png";
import tradeBot from "../../assets/utilities/chatgpt-64.png";
import bridge from "../../assets/utilities/multichain-64.png";
import wallet from "../../assets/utilities/wallet-64.png";
import marketing from "../../assets/utilities/marketing-64.png";
import copyBot from "../../assets/utilities/tradeBot-64.png";

const AboutCopyFi = () => {
  const utilitiesData = [
    { id: 1, utilName: "Airdrop Aggregator", image: airdrop, alt: "airdrop" },
    { id: 2, utilName: "AI Trade Bot", image: tradeBot, alt: "Trade Bot" },
    {
      id: 3,
      utilName: "MultiChain Portfolio Tracker",
      image: wallet,
      alt: "Portfolio Tracker",
    },
    {
      id: 4,
      utilName: "MultiChain Bridge and Swap",
      image: bridge,
      alt: "Multichain Bridge and Swap",
    },
    {
      id: 5,
      utilName: "Copy Trade Bot",
      image: copyBot,
      alt: "Copy Trade Bot",
    },
    {
      id: 6,
      utilName: "Marketing and Incubation Services",
      image: marketing,
      alt: "Marketing and Incubation Services",
    },
  ];

  return (
    <div className="aboutCopyFi_container">
      <div className="aboutCopyFi" id="about-copyfi">
        <h1 className="gradient__text">About CopyFi</h1>
        <p>
          CopyFi ia an Ecosystem with wide variety of essential features and
          Services required for any crypto trader to effectively managing their
          Trades and Portfolios.
        </p>
      </div>

      <div className="utilities_container" id="utilities">
        <h1>CopyFi Utilities</h1>

        <div className="utilities">
          {utilitiesData.map((data) => (
            <Utility
              key={data.id}
              image={data.image}
              utilName={data.utilName}
              alt={data.alt}
            />
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default AboutCopyFi;
