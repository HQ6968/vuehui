<template>
  <table class="table table-hover" :class="{'table-bordered': border}">
    <tbody>
    <slot></slot>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "CTable",
    props: {
      border: {
        type: Boolean,
        default: true,
      }
    }
  }
</script>

<style scoped>
  .table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }

  .table-bordered {
    border: 1px solid #ddd;
  }

  .table > tbody > tr > td,
  .table > tbody > tr > th,
  .table > tfoot > tr > td,
  .table > tfoot > tr > th,
  .table > thead > tr > td,
  .table > thead > tr > th {
    line-height: 1.42857;
    padding: 8px;
    vertical-align: top;
    text-align: left;
  }

  .table-bordered > tbody > tr > td,
  .table-bordered > tbody > tr > th,
  .table-bordered > tfoot > tr > td,
  .table-bordered > tfoot > tr > th,
  .table-bordered > thead > tr > td,
  .table-bordered > thead > tr > th {
    border: 1px solid #e7eaec;
  }

  .table > tbody > tr > td.text-right,
  .table > tbody > tr > th.text-right,
  .table > tfoot > tr > td.text-right,
  .table > tfoot > tr > th.text-right,
  .table > thead > tr > td.text-right,
  .table > thead > tr > th.text-right {
    text-align: right !important;
  }

  .text-center,
  .table > tbody > tr > td.text-center,
  .table > tbody > tr > th.text-center,
  .table > tfoot > tr > td.text-center,
  .table > tfoot > tr > th.text-center,
  .table > thead > tr > td.text-center,
  .table > thead > tr > th.text-center {
    text-align: center !important;
  }

  .table > tbody > tr.active > td,
  .table > tbody > tr.active > th,
  .table > tbody > tr > td.active,
  .table > tbody > tr > th.active,
  .table > tfoot > tr.active > td,
  .table > tfoot > tr.active > th,
  .table > tfoot > tr > td.active,
  .table > tfoot > tr > th.active,
  .table > thead > tr.active > td,
  .table > thead > tr.active > th,
  .table > thead > tr > td.active,
  .table > thead > tr > th.active {
    background-color: #f5f5f5;
  }
</style>