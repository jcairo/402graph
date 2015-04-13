'use strict';

angular.module('graph')
.directive('graph', function (mockData) {
    return {
        restrict: 'E',
        replace: false,
        link: function (scope, element, attrs) {
            // scope.$watch(scope.getData(), function(newValue, oldValue, scope) {
            //    console.log("Watching");
            // }, objectEquality);

            var data = scope.getData();

            var width = 960,
                height = 600;

            var color = d3.scale.category20();

            var force = d3.layout.force()
                .charge(-900)
                .linkDistance(150)
                .size([width, height]);

            var svg = d3.select("body").append("svg")
                .attr("width", width)
                .attr("height", height);

            force
              .nodes(mockData.data.nodes)
              .links(mockData.data.links)
              .start();

            var link = svg.selectAll(".link")
              .data(mockData.data.links)
              .enter().append("line")
              .attr("class", "link")
              .style("stroke-width", function(d) { return Math.sqrt(d.value); });

            var node = svg.selectAll(".node")
              .data(mockData.data.nodes)
              .enter().append("circle")
              .attr("class", "node")
              .attr("r", 10)
              .style("fill", function(d) { return color(d.group); })
              .call(force.drag);

            var texts = svg.selectAll("text.label")
                .data(mockData.data.nodes)
                .enter().append("text")
                .attr("class", "label")
                .attr("fill", "black")
                .text(function(d) {  return d.author_name;  });

            node.append("title")
              .text(function(d) { return d.author_name; });

            force.on("tick", function() {
            link.attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            node.attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });

            texts.attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
                });
            });
        },

        scope: {
            getData: '&'
        },
        controller: 'GraphCtrl'
    };
});