'use strict';

angular.module('graph')
.service('mockData', function () {
    return {
        data: {"directed":false,"graph":[],"nodes":[{"bio":"Georgia Institute of Technology","publications_by_year":[{"count":15,"year":2009},{"count":41,"year":2010},{"count":99,"year":2011},{"count":59,"year":2012},{"count":89,"year":2013},{"count":244,"year":2014},{"count":30,"year":2015}],"author_name":"Michael E Helms","id":"u7lwEpEAAAAJ","author_uid":"u7lwEpEAAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=u7lwEpEAAAAJ&citpid=1","h_index":"12","total_citations":"583","research_interests":[],"i10_index":"13"},{"bio":"Postdoctoral fellow, The University of Texas at Austin","publications_by_year":[{"count":99,"year":2007},{"count":107,"year":2008},{"count":121,"year":2009},{"count":88,"year":2010},{"count":109,"year":2011},{"count":137,"year":2012},{"count":121,"year":2013},{"count":126,"year":2014},{"count":19,"year":2015}],"author_name":"Tsz-Chiu Au","id":"2CTRfewAAAAJ","author_uid":"2CTRfewAAAAJ","author_image_URL":"https://scholar.google.ca/citations/images/avatar_scholar_150.jpg","h_index":"11","total_citations":"1113","research_interests":["Artificial Intelligence"],"i10_index":"14"},{"bio":"Georgia Institute of Technology","publications_by_year":[{"count":12,"year":2007},{"count":23,"year":2008},{"count":17,"year":2009},{"count":24,"year":2010},{"count":16,"year":2011},{"count":18,"year":2012},{"count":20,"year":2013},{"count":31,"year":2014},{"count":5,"year":2015}],"author_name":"Joshua Jones","id":"peVArIUAAAAJ","author_uid":"peVArIUAAAAJ","author_image_URL":"https://scholar.google.ca/citations/images/avatar_scholar_150.jpg","h_index":"8","total_citations":"241","research_interests":["Artificial Intelligence","Machine Learning","Metareasoning","Diagnosis"],"i10_index":"7"},{"bio":"Dalhousie University","publications_by_year":[{"count":6,"year":2009},{"count":8,"year":2010},{"count":21,"year":2011},{"count":22,"year":2012},{"count":70,"year":2013},{"count":100,"year":2014},{"count":9,"year":2015}],"author_name":"Mike Smit","id":"KqW63v4AAAAJ","author_uid":"KqW63v4AAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=KqW63v4AAAAJ&citpid=2","h_index":"9","total_citations":"240","research_interests":["Research Communities","Open Information","Service-oriented Architectures","Cloud Computing","Adaptive Systems"],"i10_index":"9"},{"bio":"University of Maryland","publications_by_year":[{"count":946,"year":2007},{"count":888,"year":2008},{"count":1006,"year":2009},{"count":825,"year":2010},{"count":890,"year":2011},{"count":933,"year":2012},{"count":905,"year":2013},{"count":798,"year":2014},{"count":154,"year":2015}],"author_name":"Dana Nau","id":"fez4ulcAAAAJ","author_uid":"fez4ulcAAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=fez4ulcAAAAJ&citpid=2","h_index":"54","total_citations":"13777","research_interests":["Artificial Intelligence","Automated Planning","Search","Game Theory"],"i10_index":"159"},{"bio":"IBM","publications_by_year":[{"count":85,"year":2007},{"count":56,"year":2008},{"count":67,"year":2009},{"count":71,"year":2010},{"count":139,"year":2011},{"count":268,"year":2012},{"count":283,"year":2013},{"count":328,"year":2014},{"count":71,"year":2015}],"author_name":"\"James Fan\"","id":"6t9-eNQAAAAJ","author_uid":"6t9-eNQAAAAJ","author_image_URL":"https://scholar.google.ca/citations/images/avatar_scholar_150.jpg","h_index":"18","total_citations":"1632","research_interests":["Artificial Intelligence"],"i10_index":"28"},{"bio":"IBM","publications_by_year":[{"count":129,"year":2007},{"count":146,"year":2008},{"count":157,"year":2009},{"count":124,"year":2010},{"count":192,"year":2011},{"count":334,"year":2012},{"count":280,"year":2013},{"count":323,"year":2014},{"count":67,"year":2015}],"author_name":"J. William Murdock","id":"d-Wad6EAAAAJ","author_uid":"d-Wad6EAAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=d-Wad6EAAAAJ&citpid=1","h_index":"19","total_citations":"2175","research_interests":["Computer Science","Artificial Intelligence","Question Answering","Natural Language Processing","Reflection"],"i10_index":"27"},{"bio":"Professor of Computing Science, University of Alberta","publications_by_year":[{"count":251,"year":2007},{"count":272,"year":2008},{"count":275,"year":2009},{"count":400,"year":2010},{"count":426,"year":2011},{"count":429,"year":2012},{"count":492,"year":2013},{"count":454,"year":2014},{"count":108,"year":2015}],"author_name":"Eleni Stroulia","id":"TyM1dLwAAAAJ","author_uid":"TyM1dLwAAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=TyM1dLwAAAAJ&citpid=1","h_index":"33","total_citations":"4097","research_interests":["Artificial Intelligence","Software Engineering","Software Maintenance","Software Evolution","Service Oriented Architecture"],"i10_index":"83"},{"bio":"University of Alberta","publications_by_year":[{"count":20,"year":2007},{"count":31,"year":2008},{"count":45,"year":2009},{"count":72,"year":2010},{"count":97,"year":2011},{"count":121,"year":2012},{"count":172,"year":2013},{"count":260,"year":2014},{"count":75,"year":2015}],"author_name":"Abram Hindle","id":"vuT1ZlUAAAAJ","author_uid":"vuT1ZlUAAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=vuT1ZlUAAAAJ&citpid=1","h_index":"17","total_citations":"926","research_interests":["Mining Software Repositories","Software Engineering","Software Power Consumption","Software Energy Consumption"],"i10_index":"27"},{"bio":"Professor of Computer Science, Carnegie Mellon University","publications_by_year":[{"count":135,"year":2007},{"count":130,"year":2008},{"count":144,"year":2009},{"count":210,"year":2010},{"count":233,"year":2011},{"count":313,"year":2012},{"count":309,"year":2013},{"count":319,"year":2014},{"count":64,"year":2015}],"author_name":"Eric Nyberg","id":"G6XN5cRm0FIJ","author_uid":"G6XN5cRm0FIJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=G6XN5cRm0FIJ&citpid=1","h_index":"30","total_citations":"2817","research_interests":["Artificial Intelligence","Computational Linguistics","Machine Translation","Question Answering"],"i10_index":"57"},{"bio":"Georgia Institute of Technology","publications_by_year":[{"count":13,"year":2007},{"count":14,"year":2008},{"count":36,"year":2009},{"count":66,"year":2010},{"count":144,"year":2011},{"count":109,"year":2012},{"count":151,"year":2013},{"count":312,"year":2014},{"count":53,"year":2015}],"author_name":"Swaroop Vattam","id":"-374SY0AAAAJ","author_uid":"-374SY0AAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=-374SY0AAAAJ&citpid=7","h_index":"15","total_citations":"937","research_interests":["Artificial intelligence","Machine learning","Cognitive science"],"i10_index":"17"},{"bio":"University of Alberta","publications_by_year":[{"count":7,"year":2009},{"count":12,"year":2010},{"count":23,"year":2011},{"count":35,"year":2012},{"count":52,"year":2013},{"count":42,"year":2014},{"count":17,"year":2015}],"author_name":"Marios-Eleftherios Fokaefs","id":"CFKjCQQAAAAJ","author_uid":"CFKjCQQAAAAJ","author_image_URL":"https://scholar.google.ca/citations/images/avatar_scholar_150.jpg","h_index":"7","total_citations":"190","research_interests":["Software Engineering"],"i10_index":"7"},{"bio":"Assistant Professor at the Department of Computer Science & Software Engineering, Concordia","publications_by_year":[{"count":39,"year":2007},{"count":48,"year":2008},{"count":58,"year":2009},{"count":120,"year":2010},{"count":123,"year":2011},{"count":140,"year":2012},{"count":162,"year":2013},{"count":165,"year":2014},{"count":64,"year":2015}],"author_name":"Nikolaos Tsantalis","id":"Jxc9CBwAAAAJ","author_uid":"Jxc9CBwAAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=Jxc9CBwAAAAJ&citpid=3","h_index":"16","total_citations":"937","research_interests":["Software Engineering"],"i10_index":"18"},{"bio":"Faculty of Information, University of Toronto","publications_by_year":[{"count":50,"year":2007},{"count":61,"year":2008},{"count":77,"year":2009},{"count":148,"year":2010},{"count":131,"year":2011},{"count":143,"year":2012},{"count":136,"year":2013},{"count":130,"year":2014},{"count":27,"year":2015}],"author_name":"Kelly Lyons","id":"PJsN8P0AAAAJ","author_uid":"PJsN8P0AAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=PJsN8P0AAAAJ&citpid=1","h_index":"14","total_citations":"1233","research_interests":["Computer Science","Software Engineering","Collaboration","Service Science","Social Media"],"i10_index":"15"},{"bio":"Professor of Systems and Computing Engineering, Universidad de Los Andes","publications_by_year":[{"count":4,"year":2007},{"count":6,"year":2008},{"count":12,"year":2009},{"count":6,"year":2010},{"count":8,"year":2011},{"count":11,"year":2012},{"count":5,"year":2013},{"count":12,"year":2014},{"count":1,"year":2015}],"author_name":"Dario Correal","id":"Bo4lXDAtq9QC","author_uid":"Bo4lXDAtq9QC","author_image_URL":"https://scholar.google.ca/citations/images/avatar_scholar_150.jpg","h_index":"5","total_citations":"69","research_interests":["Software Architecture","Software Design","Software Development"],"i10_index":"2"},{"bio":"Associate Professor of Computing Science, University of Alberta","publications_by_year":[{"count":87,"year":2007},{"count":103,"year":2008},{"count":62,"year":2009},{"count":84,"year":2010},{"count":87,"year":2011},{"count":82,"year":2012},{"count":105,"year":2013},{"count":106,"year":2014},{"count":20,"year":2015}],"author_name":"Denilson Barbosa","id":"usr3H7gAAAAJ","author_uid":"usr3H7gAAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=usr3H7gAAAAJ&citpid=1","h_index":"15","total_citations":"1003","research_interests":["Databases","XML","WWW","Information Extraction"],"i10_index":"22"},{"bio":"Ph.D. Candidate, University of Alberta","publications_by_year":[{"count":1,"year":2011},{"count":1,"year":2012},{"count":8,"year":2013},{"count":18,"year":2014},{"count":5,"year":2015}],"author_name":"Victor Guana", "primary": true, "author_url": "https://scholar.google.ca/citations?user=u7lwEpEAAAAJ&hl=en", "id":"Q0ZsJ_UAAAAJ","author_uid":"Q0ZsJ_UAAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=Q0ZsJ_UAAAAJ&citpid=5","h_index":"4","total_citations":"33","research_interests":["Code Generation","Model-Driven Engineering","Domain-Specific Languages","Human Aspects of Software Engineering"],"i10_index":"0"},{"bio":"Google Research","publications_by_year":[{"count":414,"year":2007},{"count":419,"year":2008},{"count":417,"year":2009},{"count":383,"year":2010},{"count":426,"year":2011},{"count":544,"year":2012},{"count":550,"year":2013},{"count":536,"year":2014},{"count":98,"year":2015}],"author_name":"Chris Welty","id":"_X6fpR8AAAAJ","author_uid":"_X6fpR8AAAAJ","author_image_URL":"https://scholar.google.ca/citations/images/avatar_scholar_150.jpg","h_index":"34","total_citations":"5735","research_interests":["Semantic Web","Ontology","Natural Language Processing","Watson"],"i10_index":"60"},{"bio":"Assistant Professor of Computer Sciences, Cairo University","publications_by_year":[{"count":51,"year":2007},{"count":60,"year":2008},{"count":63,"year":2009},{"count":49,"year":2010},{"count":57,"year":2011},{"count":42,"year":2012},{"count":51,"year":2013},{"count":36,"year":2014},{"count":10,"year":2015}],"author_name":"Mohammad El-Ramly","id":"fZzS6rMAAAAJ","author_uid":"fZzS6rMAAAAJ","author_image_URL":"https://scholar.google.ca/citations/images/avatar_scholar_150.jpg","h_index":"15","total_citations":"616","research_interests":["Software Engineering","Software Evolution","Software Reengineering","Reverse Engineering","Program Transformation"],"i10_index":"18"},{"bio":"Professor of Computer Science, School of Interactive Computing, Georgia Institute of Technology","publications_by_year":[{"count":143,"year":2007},{"count":218,"year":2008},{"count":241,"year":2009},{"count":281,"year":2010},{"count":407,"year":2011},{"count":338,"year":2012},{"count":414,"year":2013},{"count":713,"year":2014},{"count":117,"year":2015}],"author_name":"Ashok K. Goel","id":"VjNg25EAAAAJ","author_uid":"VjNg25EAAAAJ","author_image_URL":"https://scholar.google.ca/citations?view_op=view_photo&user=VjNg25EAAAAJ&citpid=1","h_index":"39","total_citations":"5419","research_interests":["Artificial Intelligence","Cognitive Science","Human-Centered Computing","Computer-Aided Design","Computational Creativity"],"i10_index":"115"}],"links":[{"source":0,"target":19},{"source":1,"target":6},{"source":2,"target":19},{"source":3,"target":7},{"source":4,"target":6},{"source":5,"target":6},{"source":6,"target":17},{"source":6,"target":9},{"source":6,"target":19},{"source":7,"target":16},{"source":7,"target":11},{"source":7,"target":13},{"source":7,"target":18},{"source":7,"target":19},{"source":8,"target":16},{"source":10,"target":19},{"source":12,"target":16},{"source":14,"target":16},{"source":15,"target":16}],"multigraph":false}
    };
});