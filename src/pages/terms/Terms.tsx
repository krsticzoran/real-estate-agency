import { FC } from "react";
import { Container, Table } from "react-bootstrap";

const Terms: FC = () => {
  return (
    <div style={{ margin: "100px 0", paddingTop: "30px" }}>
      <Container>
        <h1 style={{ color: "#5c0282", opacity: "0.9" }}>
          Terms and Condition
        </h1>
        <p style={{ color: "#000", opacity: "0.5" }}>
          Most real estate agencies charge the same commission rates. The fee
          for a real estate agent depends on the kind of real estate service
          (letting, commercial, sales). Our table shows the commission rates for
          clients.
        </p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Agency Fee</th>
              <th>Paid By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Commercial Rentals</td>
              <td>
                10% of the average year's rent of the Di Fermo Period + VAT
              </td>
              <td>Tenant & Owner</td>
            </tr>
            <tr>
              <td>Commercial Short Lets</td>
              <td>10% of total rent + VAT</td>
              <td>Tenant & Owner</td>
            </tr>
            <tr>
              <td>Percentage on any Premium</td>
              <td>5%</td>
              <td>Receiving Party</td>
            </tr>
            <tr>
              <td>Commercial Sales</td>
              <td>5% + VAT</td>
              <td>Usually Owner</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Terms;
