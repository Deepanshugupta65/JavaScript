<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function myVar(){
            var a = 10;
            if(true){
                document.write(a + "<br>");   // output is 10
            }
            document.write(a + "<br>");   // output is 10
        }
        myVar();
//   let use 
        function mylet(){
            let a = 10;
            if(true){
                let a = 20;
                document.write(a + "<br>");   // output is 20   
            }
            document.write(a + "<br>");   // output is 10   scope is break 
        }
        mylet();
        


    </script>
</body>
</html>
