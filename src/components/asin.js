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
  { label: "US - 1", value: "US" },
  { label: "CA - 7", value: "CA" },
  { label: "MX - 771770", value: "MX" },
  { label: "BR - 526970", value: "BR" },
  { label: "IN - 44571", value: "IN" },
  { label: "UK - 3", value: "UK" },
  { label: "FR - 5", value: "FR" },
  { label: "IT - 35691", value: "IT" },
  { label: "ES - 44551", value: "ES" },
  { label: "DE - 4", value: "DE" },
  { label: "BE - 679831071", value: "BE" },
  { label: "EG - 623225021", value: "EG" },
  { label: "NL - 328451", value: "NL" },
  { label: "PL - 712115121", value: "PL" },
  { label: "AE - 338801", value: "AE" },
  { label: "SA - 338811", value: "SA" },
  { label: "SE - 704403121", value: "SE" },
  { label: "TR - 338851", value: "TR" },
  { label: "JP - 6", value: "JP" },
  { label: "AU - 111172", value: "AU" },
  { label: "SG - 104444012", value: "SG" },
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
       case "BR":
      domain = "https://www.amazon.com.br/";
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
