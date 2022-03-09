import {
  DataTable,
  DataTableContent,
  DataTableBody,
  DataTableRow,
  DataTableCell,
} from "@rmwc/data-table";
import { Button } from "@rmwc/button";

const linkTable = [
  [
    { name: "some Other link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
  ],
  [
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
  ],
  [
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
  ],
  [
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
    { name: "some important link", link: "https://some.important.link" },
  ],
];

export const OtherLinks = () => {
  return (
    <DataTable style={{ width: 'calc(100vw - 40px)' }}>
      <DataTableContent>
        <DataTableBody>
          {linkTable.map(row => (
            <DataTableRow>
              {row.map(({ name, link }) => (
                <DataTableCell>
                  <Button danger outlined onClick={() => window.open(link, "_blank")}>{name}</Button>
                </DataTableCell>
              ))}
            </DataTableRow>
          ))}
        </DataTableBody>
      </DataTableContent>
    </DataTable>
  )
};
