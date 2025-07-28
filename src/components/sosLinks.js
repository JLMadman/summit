import {
  DataTable,
  DataTableContent,
  DataTableBody,
  DataTableRow,
  DataTableCell,
} from "@rmwc/data-table";
import { Button } from "@rmwc/button";

export const linkTable = [
  [
    { name: "Alabama", link: "https://www.sos.alabama.gov/government-records/business-entity-records" },
    { name: "Alaska", link: "https://www.commerce.alaska.gov/cbp/main/search/entities" },
    { name: "Arizona", link: "https://azsos.gov/business" },
    { name: "Arkansas", link: "https://www.sos.arkansas.gov/corps/search_all.php" },
    { name: "California", link: "https://bizfileonline.sos.ca.gov/search/business" },
    { name: "Colorado", link: "https://www.sos.state.co.us/biz/BusinessEntityCriteriaExt.do" },
    { name: "Connecticut", link: "https://service.ct.gov/business/s/onlinebusinesssearch?language=en_US" },
  ],
  [
    { name: "Illinois", link: "http://apps.ilsos.gov/businessentitysearch/" },
    { name: "Indiana", link: "https://www.in.gov/sos/business/" },
    { name: "Delaware", link: "https://icis.corp.delaware.gov/Ecorp/EntitySearch/NameSearch.aspx" },
    { name: "Florida", link: "http://search.sunbiz.org/Inquiry/CorporationSearch/ByName" },
    { name: "Georgia", link: "https://ecorp.sos.ga.gov/BusinessSearch" },
    { name: "Hawaii", link: "https://hbe.ehawaii.gov/documents/search.html" },
    { name: "Idaho", link: "https://sosbiz.idaho.gov/search/business" },
    ],
  [
    { name: "Maine", link: "https://icrs.informe.org/nei-sos-icrs/ICRS?MainPage=x" },
    { name: "Maryland", link: "https://egov.maryland.gov/businessexpress/entitysearch" },
    { name: "Massachusetts[E]", link: "https://corp.sec.state.ma.us/corpweb/CorpSearch/CorpSearch.aspx" },
    { name: "Iowa", link: "https://sos.iowa.gov/search/business/search.aspx" },
    { name: "Kansas", link: "https://www.kansas.gov/bess" },
    { name: "Kentucky[E]", link: "https://sosbes.sos.ky.gov/BusSearchNProfile/search.aspx" },
    { name: "Louisiana", link: "https://coraweb.sos.la.gov/commercialsearch/commercialsearch.aspx" },
  ],
  [
    { name: "Missouri", link: "https://bsd.sos.mo.gov/BusinessEntity/BESearch.aspx?SearchType=0" },
    { name: "Montana", link: "https://biz.sosmt.gov/search/business" },
    { name: "Nebraska", link: "https://www.nebraska.gov/sos/corp/corpsearch.cgi?nav=search" },
    { name: "Nevada", link: "https://esos.nv.gov/EntitySearch/OnlineEntitySearch" },
    { name: "Michigan", link: "https://cofs.lara.state.mi.us/SearchApi/Search/Search" },
    { name: "Minnesota", link: "https://www.sos.state.mn.us/business-liens/business-help/how-to-search-business-filings/" },
    { name: "Mississippi", link: "https://www.sos.ms.gov/online-services-directory" },
  ],
  [
    { name: "New Mexico", link: "https://www.sos.state.nm.us/" },
    { name: "New York", link: "https://appext20.dos.ny.gov/corp_public/CORPSEARCH.ENTITY_SEARCH_ENTRY" },
    { name: "North Carolina", link: "https://www.sosnc.gov/divisions/business_registration" },
    { name: "North Dakota", link: "https://firststop.sos.nd.gov/search/business" },
    { name: "Ohio", link: "https://businesssearch.ohiosos.gov/" },
    { name: "New Hampshire", link: "https://www.sos.nh.gov/corporations-0" },
    { name: "New Jersey", link: "https://www.njportal.com/dor/businessnamesearch/" },
  ],
  [
    { name:  "Oregon", link: "https://sos.oregon.gov/business/Pages/find.aspx" },
    { name: "Pennsylvania[E]", link: "https://secretaryofstate.com/pennsylvania" },
    { name: "Rhode Island[F]", link: "https://business.sos.ri.gov/CorpWeb/CorpSearch/CorpSearch.aspx" },
    { name: "South Carolina", link: "https://businessfilings.sc.gov/BusinessFiling/Entity/Search" },
    { name: "South Dakota", link: "https://sdsos.gov/business-services/default.aspx" },
    { name: "Tennessee", link: "https://sos.tn.gov/search?f%5B0%5D=division_category%3AExisting%20Businesses" },
    { name: "Oklahoma", link: "https://www.sos.ok.gov/corp/corpInquiryFind.aspx" },
  ],
    [
    { name: "Texas", link: "https://mycpa.cpa.state.tx.us/coa/" },
    { name: "Vermont", link: "https://secretaryofstate.com/vermont" },
    { name: "Virginia[E]", link: "https://www.secstates.com/VA_Virginia_Secretary_of_State_Corporation_Search#google_vignette"},
    { name: "Washington", link: "https://ccfs.sos.wa.gov/#/" },
    { name: "West Virginia", link: "https://apps.sos.wv.gov/business/corporations/" },
    { name: "Wisconsin", link: "https://sos.wi.gov/" },
    { name: "Wyoming", link: "https://sos.wyo.gov/" },
  ],
  [
    { name: "Utah", link: "https://www.secstates.com/UT_Utah_Secretary_of_State_Corporation_Search" },
  ]
];

export const SosLinks = () => {
  return (
    <DataTable style={{ width: 'calc(100vw - 50px)' }}>
      <DataTableContent>
        <DataTableBody>
          {linkTable.map(row => (
            <DataTableRow>
              {row.map(({ name, link }) => (
                <DataTableCell>
                  <Button onClick={() => window.open(link, "_blank")} className="link-button-sos">{name}</Button>
                </DataTableCell>
              ))}
            </DataTableRow>
          ))}
        </DataTableBody>
      </DataTableContent>
    </DataTable>
  )
};
