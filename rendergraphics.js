
    function rendergraphics_full(arr){
    //alert("sirmaraer");
    var body = document.getElementsByTagName("body")[0];

        // create elements <table> and a <tbody>
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");
    
    for(i=0; i<arr.length; i++)
    {

        var row = document.createElement("tr");
        //alert(i);
        for(j=0; j<arr[i].length; j++)
        {
            //alert(j);
             var cell = document.createElement("td"); 
             //cell.setAttribute("border", "none");
             cell.setAttribute("id", i.toString()+","+j.toString());
             var img = document.createElement('img');
              //var cellText = document.createTextNode("cell is row "+j+", column "+i); 
              //cell.appendChild(cellText);
            if(arr[i][j].charAt(0)=='R')
            {
                img.src = "images/roadC.png";
            }
            else if(arr[i][j].charAt(0)=='P')
            {
                img.src = "images/house.jpg";
            }           
            else if(arr[i][j].charAt(0)=='G')
            {
                img.src = "images/Grass.jpg";
            }
            else if(arr[i][j].charAt(0)=='S')
            {
                img.src = "images/user.jpg";
            }
            else if(arr[i][j].charAt(0)=='D')
            {
                img.src = "images/icecream.jpg";
            }
            else if(arr[i][j].charAt(0) == 'T')
            {
                img.src = "images/roadC.png";
            }
            else if(arr[i][j].charAt(0) == 'C')
            {
                img.src = "images/cop.jpg";
            }
            cell.appendChild(img);

             row.appendChild(cell);

        }

        tblBody.appendChild(row);

       
    


    }

     tbl.appendChild(tblBody);
        // put <table> in the <body>
    body.appendChild(tbl);
    tbl.setAttribute("border", "0");
}

function rendergraphics_partial(arr, i, j, oldi, oldj)
{
	//alert("here");
	var cell = document.getElementById(i+","+j);
	//alert(cell);
	//alert("sir");
	if (arr[i][j].charAt(0) == 'S')
	{
		//alert("here");
		cell.getElementsByTagName('img')[0].src = "images/user.jpg";
		
	}

	var cell = document.getElementById(oldi+","+oldj);
	//alert(cell);
	//alert("sir");
	if (arr[oldi][oldj].charAt(0) == 'T')
	{
		//alert("here");
		cell.getElementsByTagName('img')[0].src = "images/roadC.png";
		
	}

}