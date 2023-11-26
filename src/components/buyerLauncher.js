import { useState } from "react";
import { Select } from "@rmwc/select";
import { TextField } from "@rmwc/textfield";
import { Button } from "@rmwc/button";
import "@rmwc/menu/styles";
import "@rmwc/select/styles";
import "@rmwc/typography/styles";
import "@rmwc/textfield/styles";
import "@rmwc/button/styles";

const countries = ["NA", "EU", "JP"];
const buyerOptions = [
  {
    label: "Customer ID - SUMMIT",
    value: "summit-search-by-customer-id-page",
    tabIndex: -1,
  },
  {
    label: "Customer ID - B2B",
    value: "abuse-b2b-investigation-page",
  },
  {
    label: "Customer ID - Concessions",
    value: "abuse-concessions-investigation-page",
  },
];

const defaultPageContext = {
  pageId: "", // DropDown
  program: "SUMMIT",
  caseSubject: {
    subjectType: "buyerCustomerId",
    subjectValue: "", // SearchBoxValue
  },
  marketplaceId: "",
  contextType: "SEARCH",
  searchScopeId: "summit-search-by-customer-id",
  searchValue: "", // SearchBoxValue
  isSecuredLink: false,
};
export const generateLoadLink = (org, buyerId, idArray) => {
  const makePageContext = (pageId, customerId) => {
    const pageContext = { ...defaultPageContext };
    pageContext.pageId = buyerId;
    pageContext.caseSubject.subjectValue = customerId.trim();
    pageContext.searchValue = customerId.trim();
    if (org === "NA") {
      pageContext.marketplaceId = "1";
    } else if (org === "EU") {
      pageContext.marketplaceId = "3";
    } else if (org === "JP") {
      pageContext.marketplaceId = "6";
    }
    if(pageId === 'summit-search-by-customer-id-page') {
      pageContext.program = 'SUMMIT'
      pageContext.searchScopeId = 'summit-search-by-customer-id'
    } else if(pageId === 'b2b-search-by-customer-id-with-outcomes'){
      pageContext.program = 'AbusePrevention',
      pageContext.searchScopeId = 'b2b-search-by-customer-id-with-outcomes'
    } else if(pageId === 'concessions-search-by-customer-id-read-only') {
      pageContext.program = 'AbusePrevention',
      pageContext.searchScopeId = 'concessions-search-by-customer-id-read-only'
    }
    return pageContext;
  };

  return idArray.map(
    (id) =>
      `https://paragon-${org === 'JP' ? 'fe' : org}.amazon.com/hz/dvr-search/detail?pageContext=${encodeURIComponent(
        JSON.stringify(makePageContext(buyerId, id))
      )}&searchScopeId=summit-search-by-customer-id`
  );
};

export const BuyerLauncher = () => {
  const [org, setOrg] = useState();
  const [ids, setIds] = useState();
  const [selectedBuyer, setSelectedBuyer] = useState(
    "summit-search-by-customer-id-page"
  );

  const handleLoadClick = (e) => {
    console.log("yo");
    e.preventDefault();
    const idArray = ids.split("\n").filter((possibleId) => possibleId.length);
    generateLoadLink(org, selectedBuyer, idArray).forEach((link) =>
      window.open(link.trim(), "_blank")
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
            label="Enter Case IDs in separate lines"
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
            options={buyerOptions}
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
