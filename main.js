function httpCallbackSetups(){
       $.ajaxSetup({
           headers: {
               'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
           }
       });
   }


function _xxfs_callback(url, method, data, flag){

       if (flag){
           httpCallbackSetups();
       }
       return  $.ajax({
           type: method,
           url: url,
           data: data,
       });
  }
