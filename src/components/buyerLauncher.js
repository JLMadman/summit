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
  "BR",
  "AE",
  "BE",
  "DE",
  "EG",
  "ES",
  "FR",
  "IT",
  "NL",
  "PL",
  "SA",
  "SE",
  "TR",
  "UK",
  "IN",
  "AU",
  "JP",
  "SG",
];
const buyerOptions = [
  {
    label: "Customer ID - SUMMIT",
    value: "summit-search-by-customer-id-page",
    tabIndex: -1,
    searchScopeId: "summit-search-by-customer-id",
    program: "SUMMIT",
  },
  {
    label: "Customer ID - B2B",
    value: "abuse-b2b-investigation-page",
    searchScopeId: "b2b-search-by-customer-id-with-outcomes",
    program: "AbusePrevention",
  },
  {
    label: "Customer ID - Concessions",
    value: "abuse-concessions-investigation-page",
    searchScopeId: "concessions-search-by-customer-id-read-only",
    program: "AbusePrevention",
  },
];

const defaultPageContext = {
  pageId: "",
  program: "",
  caseSubject: {
    subjectType: "buyerCustomerId",
    subjectValue: "",
  },
  marketplaceId: "",
  contextType: "SEARCH",
  searchScopeId: "b2b-search-by-customer-id-with-outcomes",
  searchValue: "",
  isSecuredLink: false,
};

export const generateLoadLink = (
  org,
  selectedBuyer,
  idArray,
  searchScopeId
) => {
  const selectedBuyerObj = buyerOptions.find(
    (buyer) => buyer.value === selectedBuyer
  );
  const program = selectedBuyerObj ? selectedBuyerObj.program : "";

  const makePageContext = (pageId, customerId, searchScopeId, program) => {
    const pageContext = { ...defaultPageContext };
    pageContext.pageId = pageId;
    pageContext.caseSubject.subjectValue = customerId.trim();
    pageContext.searchValue = customerId.trim();
    if (org === "US") {
      pageContext.marketplaceId = "1";
    } else if (org === "CA") {
      pageContext.marketplaceId = "7";
    } else if (org === "MX") {
      pageContext.marketplaceId = "771770";
    } else if (org === "BR") {
      pageContext.marketplaceId = "526970";
    } else if (org === "AE") {
      pageContext.marketplaceId = "338801";
    } else if (org === "BE") {
      pageContext.marketplaceId = "679831071";
    } else if (org === "DE") {
      pageContext.marketplaceId = "4";
    } else if (org === "EG") {
      pageContext.marketplaceId = "623225021";
    } else if (org === "ES") {
      pageContext.marketplaceId = "44551";
    } else if (org === "FR") {
      pageContext.marketplaceId = "5";
    } else if (org === "IT") {
      pageContext.marketplaceId = "35691";
    } else if (org === "NL") {
      pageContext.marketplaceId = "328451";
    } else if (org === "PL") {
      pageContext.marketplaceId = "712115121";
    } else if (org === "SA") {
      pageContext.marketplaceId = "338811";
    } else if (org === "SE") {
      pageContext.marketplaceId = "704403121";
    } else if (org === "TR") {
      pageContext.marketplaceId = "338851";
    } else if (org === "UK") {
      pageContext.marketplaceId = "3";
    } else if (org === "IN") {
      pageContext.marketplaceId = "44571";
    } else if (org === "AU") {
      pageContext.marketplaceId = "111172";
    } else if (org === "JP") {
      pageContext.marketplaceId = "7";
    } else if (org === "SG") {
      pageContext.marketplaceId = "104444012";
    }

    pageContext.program = program || "AbusePrevention";
    pageContext.searchScopeId = searchScopeId;
    return pageContext;
  };
  const getOrg = (_org) => {
    if (["US", "CA", "MX", "BR"].includes(_org)) {
      return "na";
    }
    if (
      [
        "AE",
        "BE",
        "DE",
        "EG",
        "ES",
        "FR",
        "IT",
        "NL",
        "PL",
        "SA",
        "SE",
        "TR",
        "UK",
        "IN",
      ].includes(_org)
    ) {
      return "eu";
    }
    if (["AU", "JP", "SG"].includes(_org)) {
      return "fe";
    }
    return _org;
  };
  return idArray.map(
    (id) =>
      `https://paragon-${getOrg(
        org
      )}.amazon.com/hz/dvr-search/detail?pageContext=${encodeURIComponent(
        JSON.stringify(
          makePageContext(selectedBuyer, id, searchScopeId, program)
        )
      )}&searchScopeId=${searchScopeId}`
  );
};

export const BuyerLauncher = () => {
  const [org, setOrg] = useState();
  const [ids, setIds] = useState();
  const [selectedBuyer, setSelectedBuyer] = useState(buyerOptions[0].value); // Default to the first buyer option

  const handleLoadClick = (e) => {
    console.log("yo");
    e.preventDefault();
    const idArray = ids.split("\n").filter((possibleId) => possibleId.length);
    const selectedBuyerObj = buyerOptions.find(
      (buyer) => buyer.value === selectedBuyer
    );
    const searchScopeId = selectedBuyerObj
      ? selectedBuyerObj.searchScopeId
      : defaultPageContext.searchScopeId;
    generateLoadLink(org, selectedBuyer, idArray, searchScopeId).forEach(
      (link) => window.open(link.trim(), "_blank")
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
            fullwidth
            label="Enter Buyer IDs in separate lines"
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
        <div>
          <Select
            value={selectedBuyer}
            enhanced
            onChange={(evt) => setSelectedBuyer(evt.currentTarget.value)}
            label="Options"
            options={buyerOptions.map((option) => ({
              label: option.label,
              value: option.value,
            }))}
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
