<template>
  <Row>
    <Col md="4">
      <IBox title="asdfasdf">
        asdfasdf
      </IBox>
    </Col>

    <Col md="4">
      <IBox title="asdfasdf">
        asdfasdf
      </IBox>
    </Col>

    <Col md="4">
      <IBox title="asdfasdf">
        asdfasdf
      </IBox>
    </Col>
  </Row>
</template>

<script>
  import {Col, IBox, Row} from "../components";

  export default {
    name: "Home",
    components: {
      Row,
      Col,
      IBox
    }
  }
</script>

<style scoped>

</style>