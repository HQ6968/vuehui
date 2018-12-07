<template>
  <Row>

    <Col md="12">
      <Datatable
          style="margin-top: 20px"
          :columns="columns"
          :api="api"
          :filter="filter"
          @btnClick="btnClick"
          ref="datatable"
      />
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

    <Col md="4">
      <IBox title="asdfasdf">
        asdfasdf
      </IBox>
    </Col>
  </Row>
</template>

<script>
  import {Col, Datatable, IBox, Row} from "../components";
  import {userListApi} from '../service'

  export default {
    name: "Home",
    components: {
      Row,
      Col,
      IBox,
      Datatable,
    },
    data() {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name',
          },
          {
            title: '年龄',
            key: 'age',
          },
          {
            title: '地址',
            key: 'address',
          }
        ],
        filter: [],
        api(page, filter) {
          return userListApi({page, filter});
        },
      }
    },
    methods: {
      btnClick() {

      }
    }
  }
</script>

<style scoped>

</style>