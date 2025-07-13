import { useState } from "react";
import { Select } from "@rmwc/select";
import { TextField } from "@rmwc/textfield";
import { Button } from "@rmwc/button";
import "@rmwc/menu/styles";
import "@rmwc/select/styles";
import "@rmwc/typography/styles";
import "@rmwc/textfield/styles";
import "@rmwc/button/styles";

const countries = [
  { country: "US", encryptedMarketplaceId: "ATVPDKIKX0DER" },
  { country: "CA", encryptedMarketplaceId: "A2EUQ1WTGCTBG2" },
  { country: "MX", encryptedMarketplaceId: "A1AM78C64UM0Y8" },
  { country: "UK", encryptedMarketplaceId: "A1F83G8C2ARO7P" },
  { country: "FR", encryptedMarketplaceId: "A13V1IB3VIYZZH" },
  { country: "DE", encryptedMarketplaceId: "A1PA6795UKMFR9" },
  { country: "IT", encryptedMarketplaceId: "APJ6JRA9NG5V4" },
  { country: "ES", encryptedMarketplaceId: "A1RKKUPIHCS9HS" },
  { country: "IN", encryptedMarketplaceId: "A21TJRUUN4KGV" },
  { country: "TR", encryptedMarketplaceId: "A33AVAJ2PDY3EV" },
  { country: "AE", encryptedMarketplaceId: "A1F83G8C2ARO7P" },
  { country: "BE", encryptedMarketplaceId: "AMEN7PMS3EDWL" },
  { country: "EG", encryptedMarketplaceId: "A1F83G8C2ARO7P" },
  { country: "NL", encryptedMarketplaceId: "A1805IZSGTT6HS" },
  { country: "PL", encryptedMarketplaceId: "A1C3SOZRARQ6R3" },
  { country: "SA", encryptedMarketplaceId: "A1F83G8C2ARO7P" },
  { country: "SE", encryptedMarketplaceId: "A2NODRKZP88ZB9" },
  { country: "JP", encryptedMarketplaceId: "A75P1MG8VMU51" },
  { country: "AU", encryptedMarketplaceId: "A75P1MG8VMU51" },
  { country: "SG", encryptedMarketplaceId: "A75P1MG8VMU51" },
];

export const generateLoadLink = (org, idArray) => {
  let domain = "";
  const encryptedMarketPlace = countries.find(
    (country) => country.country === org
  ).encryptedMarketplaceId;
  switch (org) {
    case "US":
      domain = "https://paragon-na.amazon.com/hz/view-investigation-lookup";
      break;
    case "CA":
      domain = "https://paragon-na.amazon.com/hz/view-investigation-lookup";
      break;
    case "MX":
      domain = "https://paragon-na.amazon.com/hz/view-investigation-lookup";
      break;
    case "UK":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "FR":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "DE":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "IT":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "ES":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "IN":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "TR":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "AE":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "BE":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "EG":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "NL":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "PL":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "SA":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "SE":
      domain = "https://paragon-eu.amazon.com/hz/view-investigation-lookup";
      break;
    case "JP":
      domain = "https://paragon-fe.amazon.com/hz/view-investigation-lookup";
      break;
    case "AU":
      domain = "https://paragon-fe.amazon.com/hz/view-investigation-lookup";
      break;
    case "SG":
      domain = "https://paragon-fe.amazon.com/hz/view-investigation-lookup";
      break;
    default:
      return "";
  }
  return idArray.map((id) => {
    const isOrderId = id.toString().includes("-");
    const lookupType = isOrderId ? "orderId" : "sellerCustomerId";
    return `${domain}?lookupType=${lookupType}&encryptedMarketplaceId=${encryptedMarketPlace}&lookupQuery=${id}`;
  });
};

export const OrderId = () => {
  const [org, setOrg] = useState();
  const [ids, setIds] = useState();

  const handleLoadClick = (e) => {
    e.preventDefault();
    const idArray = ids.split("\n").filter((possibleId) => possibleId.length);
    generateLoadLink(org, idArray).forEach((link) =>
      window.open(link, "_blank")
    );
  };

  return (
    <div>
      <form>
        <div style={{ marginTop: "22px", marginBottom: "10px" }}>
          <TextField
            value={ids}
            onChange={(e) => setIds(e.currentTarget.value)}
            name="ids"
            textarea
            outlined
            fullwidth /* Junaid switch this to true if y */
            label="Enter Seller IDs / Order IDs in separate lines"
            rows={6}
            characterCount
          />
        </div>
        <div>
          <Select
            value={org}
            enhanced
            onChange={(evt) => setOrg(evt.currentTarget.value)}
            label="Marketplace"
            options={countries.map(({ country }) => country)}
          />
        </div>
        <div
          style={{
            margin: "18px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={handleLoadClick} label="Launch" raised />
        </div>
      </form>
    </div>
  );
};
