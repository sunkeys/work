<script>
    var cash;
    cash = {
      update:function(id,status){
          $.ajax(
              {
                  type: "POSTT",
                  url: '/shop/cash/update-status',
                  data: {'id':id,'status':status},
                  asynic: false,
                  dataType: "json",
                  beforeSend: function () {
                  },
                  success: function (result) {
                      if(result['code']==1){
                          var content = "<div style='width: 200px;text-align: center'>"+result['message']+"</div>"
                          var d = dialog({
                              title: "提示",
                              content: content,
                              ok: function () {
                                  window.location.reload()
                              }});
                          d.showModal();
                      } else {
                          gf.alert(result['message']);
                      }
                  }
              }
          );
      }
    };//aaa :a
</script>
