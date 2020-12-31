var config = {
  // email da unidade para onde as pessoas possam comunicar
  email: "maildaunidade@servio.pt",
  form1: {
    // URL do flow que lê e processa os dados do form1 - Formulário dos Casos Positivos
    url: "https://prod-109.westeurope.logic.azure.com:443/workflows/8ffab01ef4fb4f6f91dbe780fe2c94fd/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ldbOkJk-nK7sourExlAVXE0811lAd1HYnBw-hxMrSWo"
  },
  form2: {
    url: "https://prod-189.westeurope.logic.azure.com:443/workflows/7ae4736ffaeb43c0b7ea9bbfbc1f52a3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YrukeKGe6UtQQaQfyq1QY4z3-17llLNPKbAWBJOGhas"
  },
  form3: {
    url: ""
  }
}
