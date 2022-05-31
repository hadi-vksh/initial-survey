import InsuranceStyles from "../styles/InsuranceClaims.module.scss";
import {
  Row,
  Container,
  Col,
  Button,
  ButtonGroup,
  Form,
} from "react-bootstrap";

const Insurance = () => {
  function dataFetch() {}

  return (
    <Container fluid className={InsuranceStyles.Container}>
      <br />
      <Row>
        <p className={InsuranceStyles.font1}>
          INSURED<span style={{ color: "black" }}>.</span>
        </p>
      </Row>

      <Row>
        <Col></Col>
        <Col lg="8" xs="10">
          <p className={InsuranceStyles.font2}>
            <span style={{ color: "rgba(0, 0, 0, 0.41)" }}>Your </span>
            claim <span style={{ color: "rgba(0, 0, 0, 0.41)" }}>got </span>
            rejected, delayed{" "}
            <span style={{ color: "rgba(0, 0, 0, 0.41)" }}>or </span>
            less claim passed?{" "}
          </p>
        </Col>
        <Col></Col>
      </Row>
     <br/>
      <Row>
        <Col></Col>
        <Col lg="6" xs="10">
          <p className={InsuranceStyles.font3}>
            Let the
            <span style={{ color: "blue" }}> experts </span>
            handle your case!
          </p>
        </Col>

        <Col></Col>
      </Row>
      

      <Row>
        <Form className={InsuranceStyles.formouter} onSubmit={dataFetch}>
          <p className={InsuranceStyles.radiocontent}>
            Choose the Insurance type
          </p>
          <Row>
            <Col>
              <Button className={InsuranceStyles.button}>Health</Button>
            </Col>
            <Col>
              <Button className={InsuranceStyles.button}>Life</Button>
            </Col>
            <Col>
              <Button className={InsuranceStyles.button}>Vehicle</Button>
            </Col>
          </Row>
          <div className={InsuranceStyles.forForm}>
            <div className = {InsuranceStyles.forInp}>
              {" "}
              <input
                className={InsuranceStyles.input}
                id="name"
                type="name"
                name="name"
                placeholder="Name"
              />
            </div>

            <div className = {InsuranceStyles.forInp}>
              <input
                className={InsuranceStyles.input}
                id="contact"
                type="contact"
                name="contact"
                placeholder="Contact"
              />
            </div>
            <div className = {InsuranceStyles.forSub}>
              <button type="submit" className={InsuranceStyles.submit}>
                ACT
              </button>
            </div>
          </div>

        </Form>
      </Row>
      <br/>
    </Container>
  );
};

export default Insurance;
