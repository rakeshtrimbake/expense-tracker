import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 130,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 11, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 12, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 13, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 14, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 15, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 16, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 17, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 18, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 21, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 22, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 23, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 24, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 25, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 26, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 27, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 28, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 29, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function CategoryList() {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
      />
      <div>ts of the USA, which she led from 1922 to 1925 and from 1935 to 1937. Throughout her life, Hoover supported women's rights and women's independence. She was a proficient linguist, fluent in Latin and Chinese, and was the primary translator from Latin to English of the complex 16th-century metallurgy text De re metallica.

Hoover was raised in California while it was part of the American frontier. She attended Stanford University, and became the first woman to receive a degree in geology from the institution. She met fellow geology student Herbert Hoover at Stanford, and they married in 1899. The Hoovers first resided in China; the Boxer Rebellion broke out later that year, and they were at the Battle of Tientsin. In 1901 they moved to London, where Hoover raised their two sons and became a popular hostess between their international travels. During World War I, the Hoovers led humanitarian efforts to assist war refugees. The family moved to Washington, D.C. in 1917, when Herbert was appointed head of the Food and Drug Administration, and Lou became a food conservation activist in support of his work.

Hoover became the First Lady of the United States when her husband was inaugurated as president in 1929. Her invitation of Jessie De Priest to the White House for tea was controversial for its implied support of racial integration and civil rights. She refused to give interviews to reporters, but she became the first first lady to give regular radio broadcasts. Hoover was responsible for refurbishing the White House during her tenure, and saw to the construction of a presidential retreat at Rapidan Camp. She minimized her public role as White House hostess, dedicating her time as first lady to her volunteer work.

Hoover's reputation declined alongside her husband's during the Great Depression as she was portrayed as uncaring of the struggles faced by Americans. Both the public and those close to her were unaware of her extensive charitable work to support the poor while serving as first lady, as she believed that publicizing generosity was improper.

After Herbert lost his reelection campaign in 1932, the Hoovers returned to California, and they moved to New York City in 1940. Hoover was bitter about her husband's loss, blaming dishonest reporting and underhanded campaigning tactics, and she strongly opposed the Roosevelt administration. She worked to provide humanitarian support with her husband during World War II until her sudden death of a heart attack in 1944.

Early life and education
Lou Henry Hoover as a teenager sitting on a burro while carrying a rifle
Lou Henry, age 17, on a burro at Acton, California, on August 22, 1891
Lou Henry was born in Waterloo, Iowa, on March 29, 1874. Her mother was Florence Ida (née Weed), a former schoolteacher, and her father was Charles Delano Henry, a banker.[1] She was the oldest of two daughters, raised in Waterloo[2] before moving to Texas, Kansas, and California.[3] Most of her childhood was spent in the California towns of Whittier and Monterey.[2] While she was a child, her father educated her in outdoorsmanship, and she learned to camp and ride.[1] She took up sports, including baseball, basketball, and archery.[2] Her parents taught her other practical skills, such as bookkeeping and sewing. Her family was nominally Episcopalian, but Lou sometimes attended Quaker services.[4]

As a child, Henry attended Bailey Street School in Whittier until 1890.[1] She was well-liked in school, known for the science and literature clubs she organized and for her tendency to ignore gender norms by engaging in athletics and outdoor activities.[5] When she was ten, she was the editor of her school newspaper.[6] She began her postsecondary schooling at the Los Angeles Normal School (now the University of California, Los Angeles).[2] While in Los Angeles, she was a member of the school's Dickens Club that studied and collected specimens of plants and animals.[7] She later transferred to San José Normal School (now San José State University), obtaining a teaching credential in 1893.[2] She took a serious interest in politics during her college years; she joined the Republican Party based on its progressive platform, and she strongly supported women's suffrage.[8]

After her graduation in 1893, Henry took a job at her father's bank as well as working as a substitute teacher.[9] The following year, she attended a lecture by geologist John Casper Branner. Fascinated by the subject, she enrolled in Branner's program at Stanford University to pursue a degree in geology. It was there that Branner introduced her to her future husband, Herbert Hoover, who was then a senior.[10] They bonded over their shared Iowa heritage and their common interests in science and outdoorsmanship,[11][12] and their friendship developed into a courtship.[10] She studied geology with the intention of doing field work, but she and Branner were unable to find any employers willing to accept a female geologist.[13] She maintained her interest in sports while at Stanford, serving as president of the Stanford Women's Athletic Club in her final year.[14] In 1898, Hoover became the first woman to receive a bachelor's degree in geology from Stanford,[15] and she was one of the first women in the United States to hold such a degree. She continued to work with Branner, conducting research on his behalf and requesting geological samples for Stanford's collection. Branner credited her with making it one of the largest collections in the world.[16] After graduating, Henry volunteered with the Red Cross to support American soldiers during the Spanish–American War.[17]

Marriage and travels
Marriage and travel to China
In 1897, Herbert was offered an engineering job in Australia. Before leaving, he had dinner with the Henrys and their engagement was informally agreed upon.[18] Lou and Herbert maintained a long-distance r</div>
    </div>
  );
}
