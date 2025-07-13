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
  "US",
  "CA",
  "MX",
  "UK",
  "FR",
  "DE",
  "IT",
  "ES",
  "IN",
  "TR",
  "JP",
  "CN",
  "AU",
];

export const generateLoadLink = (org, idArray) => {
  let domain = "";
  switch (org) {
    case "US":
      domain = "https://www.amazon.com/";
      break;
    case "CA":
      domain = "https://www.amazon.ca/";
      break;
    case "MX":
      domain = "https://www.amazon.com.mx/";
      break;
    case "UK":
      domain = "https://www.amazon.co.uk/";
      break;
    case "FR":
      domain = "https://www.amazon.fr/";
      break;
    case "DE":
      domain = "https://www.amazon.de/";
      break;
    case "IT":
      domain = "https://www.amazon.it/";
      break;
    case "ES":
      domain = "https://www.amazon.es/";
      break;
    case "IN":
      domain = "https://www.amazon.in/";
      break;
    case "TR":
      domain = "https://www.amazon.com.tr/";
      break;
    case "JP":
      domain = "https://www.amazon.co.jp/";
      break;
    case "CN":
      domain = "https://www.amazon.cn/";
      break;
    case "AU":
      domain = "https://www.amazon.com.au/";
      break;
    default:
      return "";
  }
  return idArray.map((id) => `${domain}dp/${id}`);
};

export const Asin = () => {
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
            label="Enter ASINs in separate lines"
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
            options={countries}
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
