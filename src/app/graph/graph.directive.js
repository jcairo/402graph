'use strict';

angular.module('graph')
.directive('graph', function (mockData) {
    return {
        restrict: 'E',
        replace: false,
        link: function (scope, element, attrs) {
            var click = function (node) {
              console.log(node);
              var win = window.open(node.author_url, '_blank');
              win.focus();
            };

            var data = scope.getData();

            var width = 960,
                height = 800;

            var color = d3.scale.category20();

            var force = d3.layout.force()
              .charge(-1500)
              .linkDistance(200)
              .size([width, height]);

            var svg = d3.select("body").append("svg")
              .attr("width", '100%')
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
              .attr("r", function (d) { return d.h_index; })
              .style("fill", function(d) { return color(d.h_index); })
              .call(force.drag);

            var texts = svg.selectAll("text.label")
              .data(mockData.data.nodes)
              .enter().append("text")
              .on("click", click)
              .attr("class", "label")
              .attr("fill", "black")
              .text(function(d) {  return d.author_name;  });

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