function rendergraphics_full(arr){
	var body = document.getElementsByTagName("body")[0];

        // create elements <table> and a <tbody>
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");
	for(i=0; i<arr.length; i++)
	{
		var row = document.createElement("tr");
		for(j=0; i<arr[i].length; j++)
		{
			 var cell = document.createElement("td"); 
			 cell.setAttribute("id", i.toString()+","+j.toString());
			 var img = document.createElement('img');

    		if(arr[i][j].charAt(0)=='R')
    		{
    			img.src = "images/roadC.png";
			}
			else if(arr[i][j].charAt(0)=='P')
			{
				img.src = "images/house2.jpg";
			}    		
			else if(arr[i][j].charAt(0)=='G')
			{
				img.src = "images/Grass.png";
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
			cell.appendChild(img);

			 row.appendChild(cell);

		}

		tblBody.appendChild(row);

		tbl.appendChild(tblBody);
        // put <table> in the <body>
        body.appendChild(tbl);

	}
}