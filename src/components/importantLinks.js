import {
  DataTable,
  DataTableContent,
  DataTableBody,
  DataTableRow,
  DataTableCell,
} from "@rmwc/data-table";
import { List, ListItem } from "@rmwc/list";
import { Button } from "@rmwc/button";
import "@rmwc/list/styles";
import { useEffect, useState } from "react";

export const linkTable = [
  [
    { name: "Paragon NA", link: "https://paragon-na.amazon.com/hz/search" },
    {
      name: "PitHub NA",
      link: "https://pithub-na.amazon.com/purchase/entities?id=&confirmed=yes&realm=USAmazon",
    },
    {
      name: "GC Explorer NA",
      link: "https://gchelper-na.amazon.com/gcexplorer/",
    },
    { name: "Camshaft NA", link: "https://na-prod.spice.sps.amazon.dev/accountHolder" },
    { name: "CamelCamel", link: "https://camelcamelcamel.com/" },
    {
      name: "FF Smartsheet",
      link: "https://app.smartsheet.com/browse/workspaces",
    },
  ],
  [
    {
      name: "Global Transfer Guide",
      link: "https://share.amazon.com/sites/amazonwatson/Multiple_Verticals/SOPs/Global_Transfer_Guide.aspx",
    },
    { name: "Wallet Viewer NA", link: "https://wallet-viewer-na.amazon.com/" },
    { name: "WhoIs", link: "https://www.whois.com/whois/" },
    { name: "Amazon Wiki", link: "https://w.amazon.com/bin/view/Main/" },
    {
      name: "FF Enforcement Tracking",
      link: "https://us-east-1.quicksight.aws.amazon.com/sn/account/amazonbi/dashboards/c6a2ef14-cda5-4088-b9b2-c4925e7922bd/sheets/c6a2ef14-cda5-4088-b9b2-c4925e7922bd_fb5a7c2b-18e9-4d7a-bd2c-c077973a8e61?#",
    },
    {
      name: "Community Help-AP & APay",
      link: "https://w.amazon.com/bin/view/TRMSCommunityHelp/AP/",
    },
  ],

  [
    { name: "AHA Exit", link: "https://issues.amazon.com/issues/create?template=5d6e64a5-b686-489b-96d1-63c1001b79b1" },
    { name: "Bulk Merchant Tool", link: "https://paragon-na.amazon.com/hz/investigation-admin-tools" },
    { name: "Alchemist", link: "https://paragon-na.amazon.com/hz/ptt" },
    { name: "Image Assist", link: "https://image-assist.amazon.com/" },
    { name: "Brand Registry", link: "https://brandprofile.corp.amazon.com/i/" },
    { name: "SIMs", link: "https://sim.amazon.com/issues/search?q=status%3A(Open)+containingFolder%3A(1539c041-32d0-46d8-b0d1-a3b9060cf5e6)&sort=createDate+asc&selectedDocument=a5313c23-042b-4eb2-bfb9-3779e79c775e" },
  ],
  [
    { name: "Outbound Lookup Tool", link: "https://mercury.amazon.com/apps/oblt/outboundLookup/packageLookup?region=na" },
    {
      name: "Heartbeat 2.0",
      link: "https://heartbeat.cs.amazon.dev/#/dashboards/visualize/7519daa2-368e-4fb1-b1a0-91c2830ee7dc",
    },
    {
      name: "SpearOps Tool",
      link: "https://na-prod.spice.sps.amazon.dev/spearops",
    },
    { name: "CSI", link: "https://csi.amazon.com/view" },
    { name: "Hubble", link: "https://hubble.amazon.dev/" },
    {
      name: "Cradle",
      link: "https://datacentral.a2z.com/cradle?mons_redirect=sign_in&mons_redirect=sign_in#/SellerFinancialDisincentive/home?runPeriod=WEEK&status=All",
    },
  ],
  [
    {
      name: "Ramp Console",
      link: "https://rampconsole-iad.iad.proxy.amazon.com/navigation/multipurposeSearch?requestId=3b350af2-a1d8-4d29-9997-f26517ee6939",
    },
    { name: "Pipl", link: "https://pipl.com/search/" },
    { name: "Scam Advisor", link: "https://www.scamadviser.com/" },
    { name: "Allsec", link: "https://www.allsechro.com/AmazonSSO" },
    {
      name: "Amazon Translate",
      link: "https://azt.internal.translate.aws.dev/",
    },
    { name: "Ekata", link: "https://app.ekata.com/sign_in" },
  ],
  [
    { name: "Guidestar", link: "https://www.guidestar.org/" },
    { name: "Wayback Machine", link: "https://archive.org/web/" },
    { name: "Spokeo", link: "https://www.spokeo.com/" },
    { name: "IP Tracker", link: "https://www.ip-tracker.org/" },
    { name: "What is my IP", link: "https://whatismyipaddress.com/ip-lookup" },
    { name: "Grass", link: "https://grass-na.aka.amazon.com/" },
  ],
  [
    { name: "EUIPO", link: "https://trademarks.ipo.gov.uk/ipo-tmcase" },
    { name: "WIPO", link: "https://branddb.wipo.int/branddb/en/" },
    {
      name: "USPTO",
      link: "https://tmsearch.uspto.gov/bin/gate.exe?f=login&p_lang=english&p_d=trmk",
    },
    {
      name: "IP India",
      link: "https://ipindiaonline.gov.in/tmrpublicsearch/frmmain.aspx",
    },

    {
      name: "CS Contacts/Concession",
      link: "https://us-east-1.quicksight.aws.amazon.com/sn/account/amazonbi/dashboards/6c39134a-62cd-408d-af16-835f7b2905f3/sheets/6c39134a-62cd-408d-af16-835f7b2905f3_1e33be7a-0d2d-47fb-9a8d-cb9319921e0b?#",
    },
    {
      name: "Sales, MFN and Ads Surge",
      link: "https://us-east-1.quicksight.aws.amazon.com/sn/account/amazonbi/dashboards/585c1ab6-ccec-4cb5-9f82-e03986c3d913?directory_alias=amazonbi&ignore=true#",
    },
  ],
];

export const ImportantLinks = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchKeyword.length) {
      setSearchResults(
        []
          .concat(linkTable)
          .reduce((acc, c) => {
            c.forEach((v) => acc.push(v));
            return acc;
          }, [])
          .filter((entry) =>
            entry.name.toLowerCase().includes(searchKeyword.toLowerCase())
          )
      );
    }
    setIsSearching(!!searchKeyword.length);
  }, [searchKeyword]);

  return (
    <DataTable style={{ width: "calc(99vw - 40px)" }}>
      <DataTableContent>
        <input
          type="text"
          placeholder="Type to search..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.currentTarget.value || "")}
        />
        {isSearching ? (
          <DataTableBody>
            <List>
              {searchResults.map(({ name, link }) => (
                <ListItem onClick={() => window.open(link, "_blank")}>
                  {name}
                </ListItem>
              ))}
            </List>
          </DataTableBody>
        ) : (
          <DataTableBody>
            {linkTable.map((row) => (
              <DataTableRow>
                {row.map(({ name, link }) => (
                  <DataTableCell>
                    <Button
                      outlined
                      onClick={() => window.open(link, "_blank")}
                      className="link-button"
                    >
                      {name}
                    </Button>
                  </DataTableCell>
                ))}
              </DataTableRow>
            ))}
          </DataTableBody>
        )}
      </DataTableContent>
    </DataTable>
  );
};
