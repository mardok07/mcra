
    var svgns = "http://www.w3.org/2000/svg";

    function addPath(theSvg, id, fill, stroke, strokeWidth, data) {
        var path = document.createElementNS(svgns, "path");
        path.setAttribute("id", id);
        path.setAttribute("fill", fill);
        path.setAttribute("stroke", stroke);
        path.setAttribute("stroke-width", strokeWidth);
        path.setAttribute("d", data);
        theSvg.appendChild(path);
    }
    
//    function addImage(theSvg){
//        var img = document.createElementNS(svgns, "image");
//        img.setAttribute('href','person.png');
//        img.setAttribute('height','200px');
//        img.setAttribute('width','200px');
//        img.setAttribute("viewBox", '125 125 250 250');
//        theSvg.appendChild(img);
//    }

    function regularArcData(cx, cy, radius, startDegrees, endDegrees, isCounterClockwise) {
        var offsetRadians = -Math.PI/2; // -Math.PI/2 for 12 o'clock
        var sweepFlag = (isCounterClockwise) ? 0 : 1;
        var startRadians = offsetRadians + startDegrees * Math.PI / 180;
        var endRadians = offsetRadians + endDegrees * Math.PI / 180;
       
        var largeArc = ((endRadians - startRadians) % (2 * Math.PI)) > Math.PI ? 1 : 0;
        var startX = (cx + radius * Math.cos(startRadians));
        var startY = (cy + radius * Math.sin(startRadians));
        var endX = (cx + radius * Math.cos(endRadians));
        var endY = (cy + radius * Math.sin(endRadians));
        
        var space = " ";
        var arcData = "";
        
//        if(endDegrees == 360){
//            myr = radius;
//            return "M" + cx + "," + cy + " " +
//                    "m" + -myr + ", 0 " +
//                    "a" + myr + "," + myr + " 0 1,0 " + myr*2  + ",0 " +
//                    "a" + myr + "," + myr + " 0 1,0 " + -myr*2 + ",0Z";
//        }else{
            arcData += "M" + space + Math.round(startX) + space + startY + space;
            arcData += "A" + space + radius + space + radius + space + offsetRadians + space + largeArc + space + sweepFlag + space + endX + space + endY;
//        }
           
        return (arcData);
    }

    //------------------------//
    //--chart donut 5 pieces--//
    //------------------------//
    function addChart5pieces(element, border_width,  height, width, radius){
        var svg = document.createElementNS(svgns, "svg");
        svg.setAttribute('width', width + 'px');
        svg.setAttribute('height', height + 'px');
        
        $(element).prepend(svg);

        var cx = height / 2 ;
        var cy = width / 2;

//        addImage(svg);
        addPath(svg, "arc5", "transparent", "#FA913C", border_width, regularArcData(cx, cy, radius, 5, 67, false));
        addPath(svg, "arc4", "transparent", "#485CBF", border_width, regularArcData(cx, cy, radius, 77, 139, false));
        addPath(svg, "arc4", "transparent", "#A4B3E5", border_width, regularArcData(cx, cy, radius, 149, 211, false));
        addPath(svg, "arc4", "transparent", "#4DB530", border_width, regularArcData(cx, cy, radius, 221, 283, false));
        addPath(svg, "arc4", "transparent", "#52D274", border_width, regularArcData(cx, cy, radius, 293, 355, false));
    }   
    
    //------------------------//
    //--chart donut 2 pieces--//
    //------------------------//
    function addChart2pieces(element_to_append, border_width, height, width, radius, color1, color2, percent_1){
        var svg = document.createElementNS(svgns, "svg");
        svg.setAttribute('width', width + 'px');
        svg.setAttribute('height', height + 'px');
        
//        $(element_to_append).prepend(svg);
        if ($(element_to_append).find("svg").length > 0){ 
            $(element_to_append + ' svg').replaceWith(svg);
        }else{
            $(element_to_append).prepend(svg);
        }

        var cx = (height / 2)|0 ;
        var cy = (width / 2)|0;
        var percent1 = Math.floor(360 * (percent_1 / 100));
        
//        addImage(svg);    
        addPath(svg, "arc4", "transparent", color2, border_width, regularArcData(cx, cy, radius, percent1, 360, false));
        addPath(svg, "arc5", "transparent", color1, border_width, regularArcData(cx, cy, radius, 0, percent1, false));
    }
    
    function addChart1pieces(element_to_append, border_width, height, width, radius, color){
        var svg = document.createElementNS(svgns, "svg");
        svg.setAttribute('width', width + 'px');
        svg.setAttribute('height', height + 'px');
        
        if ($(element_to_append).find("svg").length > 0){ 
            $(element_to_append + ' svg').replaceWith(svg);
        }else{
            $(element_to_append).prepend(svg);
        }

        var cx = (height / 2);
        var cy = (width / 2);

//        addImage(svg);
        addPath(svg, "arc10", "transparent", color, border_width, regularArcData(cx, cy, radius, 0, 180, false));
        addPath(svg, "arc10", "transparent", color, border_width, regularArcData(cx, cy, radius, 180, 360, false));
    }
    
    //------------------------------//
    //--change chart color to grey--//
    //------------------------------//
    function chartSetDisabled(element_to_send){
        var svgs = $(element_to_send + " svg path");
        $.each(svgs,function(i, path){
            $(path).attr('stroke', '#939496');
        });
    }