Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=this.escapeExpression,l=c.helperMissing;return e.buffer.push('<div>\n    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">\n                <span style="font-family: \'Nothing You Could Do\', cursive;color: #DE5E60;font-size:28px" >Fork My Religion</span>\n                <span style="font-family: \'Nothing You Could Do\', cursive;font-size: 15px;font-weight: bold;color:#DE5E60">&nbsp;</span>\n            </a>\n\n        </div>\n        <div class="collapse navbar-collapse navbar-ex1-collapse"></div>\n    </nav>\n    <div class="container" id="main" style="padding-top: 30px;">'),g={},h={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push("</div>\n</div>\n"),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(k((f=c.render||b.render,f?f.call(b,"modal",i):l.call(b,"render","modal",i)))),j}),Ember.TEMPLATES["belief_systems/details"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n				<li>\n					"),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"tenant.description",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(" : \n												"),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"tenant.details",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n				</li>\n				"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push('<div class="row">\n	<div class="well">\n		<div class="badge pull-right">20 following</div>\n\n		<h1>'),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"content.name",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("</h1>\n		"),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"controller.core",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('\n		<div class="row">\n			<div class="pull-right">\n				<button class="btn btn-primary">Follow</button>\n\n				<button class="btn btn-success" '),h={},i={},e.buffer.push(k(c.action.call(b,"forkBeliefSystem","content",{hash:{},contexts:[b,b],types:["ID","ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(' >Fork</button>\n			</div>\n		</div>\n	</div>\n\n	<div class="well">\n		<div>\n			<label>Tenants:</label>\n			<ul>\n				'),h={},i={},g=c.each.call(b,"tenant","in","content.tenants",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push('\n			</ul>\n		</div>\n\n		<label>Lineage:</label>\n		<span>\n			This is a base belief system (It is not derived from another belief system)\n		</span>\n	</div>\n\n	<div class="row">\n		<div>\n			<div class="col-md-3"></div>\n			<div class="col-md-9"></div>\n			<div class="col-md-12"></div>\n\n		</div>\n	</div>'),j}),Ember.TEMPLATES.belief_systems_new=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div class="row">\n	<div class="well"><h1>Your new belief system</h1></div>\n\n	<div class="row">\n		<div>\n\n			<div class="col-md-9">\n\n				<form class="form-horizontal" role="form">\n					<div class="form-group" '),f={"class":b},g={"class":"STRING"},e.buffer.push(i(c.bindAttr.call(b,{hash:{"class":"nameStatusClass"},contexts:[],types:[],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push('>\n						<label for="inputName" class="col-lg-2 control-label">Name</label>\n						<div class="col-lg-3">\n							'),f={valueBinding:b,name:b,id:b,"class":b,placeholder:b},g={valueBinding:"STRING",name:"STRING",id:"STRING","class":"STRING",placeholder:"STRING"},e.buffer.push(i(c.view.call(b,"Ember.TextField",{hash:{valueBinding:"name",name:"name",id:"inputName","class":"form-control",placeholder:""},contexts:[b],types:["ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push('\n							<label class="control-label" >'),g={},f={},e.buffer.push(i(c._triageMustache.call(b,"errors.name",{hash:{},contexts:[b],types:["ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push('</label>\n\n						</div>\n					</div>\n\n					<div class="form-group" '),f={"class":b},g={"class":"STRING"},e.buffer.push(i(c.bindAttr.call(b,{hash:{"class":"nameStatusClass"},contexts:[],types:[],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push('>\n						<label for="inputName" class="col-lg-2 control-label">Core Belief</label>\n						<div class="col-lg-6">\n							'),f={valueBinding:b,name:b,id:b,"class":b,placeholder:b},g={valueBinding:"STRING",name:"STRING",id:"STRING","class":"STRING",placeholder:"STRING"},e.buffer.push(i(c.view.call(b,"Ember.TextField",{hash:{valueBinding:"core",name:"core",id:"inputCore","class":"form-control",placeholder:""},contexts:[b],types:["ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push('\n							<label class="control-label" >'),g={},f={},e.buffer.push(i(c._triageMustache.call(b,"errors.core",{hash:{},contexts:[b],types:["ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push('</label>\n						</div>\n					</div>\n\n\n					<div class="form-group" '),f={"class":b},g={"class":"STRING"},e.buffer.push(i(c.bindAttr.call(b,{hash:{"class":"passwordStatusClass"},contexts:[],types:[],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push('>\n						<label  class="col-lg-2 control-label">Gods:</label>\n						<div class="col-lg-3">\n							'),f={type:b,valueBinding:b,id:b,"class":b,placeholder:b},g={type:"STRING",valueBinding:"STRING",id:"STRING","class":"STRING",placeholder:"STRING"},e.buffer.push(i(c.view.call(b,"Ember.TextField",{hash:{type:"Gods",valueBinding:"Gods",id:"inputGods","class":"form-control",placeholder:"Gods"},contexts:[b],types:["ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push('\n							<label class="control-label" for="inputGods">'),g={},f={},e.buffer.push(i(c._triageMustache.call(b,"errors.Gods",{hash:{},contexts:[b],types:["ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push('</label>\n						</div>\n					</div>\n\n					<div class="form-group">\n						<div class="col-lg-offset-2 col-lg-10">\n\n							<button  '),g={},f={},e.buffer.push(i(c.action.call(b,"cancelLogin","content",{hash:{},contexts:[b,b],types:["ID","ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push(' class="btn btn-default">Cancel</button>\n\n							<button type="submit" '),g={},f={},e.buffer.push(i(c.action.call(b,"createNewBeliefSystem","content",{hash:{},contexts:[b,b],types:["ID","ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push(" class='btn  btn-primary'>\n								Create</button>\n\n						</div>\n					</div>\n				</form>\n\n			</div>\n		</div>\n	</div>"),h}),Ember.TEMPLATES.fork_belief_system=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n    <div class="alert alert-error">\n      <button class="close" data-dismiss="alert">×</button>\n      '),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n    </div>\n    "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push('<div class="modal-dialog">\n  <div class="modal-content">\n\n    <div class="modal-header">\n      <button type="button" class="close" '),h={},i={},e.buffer.push(k(c.action.call(b,"closeModal",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(' aria-hidden="true">&times;</button>\n      <h4 class="modal-title">'),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"view.title",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('</h4>\n    </div>\n\n    <div id=\'modal-alert\'></div>\n\n    <div class="modal-body" >\n      <div>\n\n				<form class="form-horizontal" role="form">\n					<div class="form-group" '),i={"class":b},h={"class":"STRING"},e.buffer.push(k(c.bindAttr.call(b,{hash:{"class":"nameStatusClass"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('>\n						<label for="inputName" class="col-lg-4 control-label">New Name</label>\n						<div class="col-lg-6">\n							'),i={valueBinding:b,name:b,id:b,"class":b,placeholder:b},h={valueBinding:"STRING",name:"STRING",id:"STRING","class":"STRING",placeholder:"STRING"},e.buffer.push(k(c.view.call(b,"Ember.TextField",{hash:{valueBinding:"newBeliefSystem.name",name:"name",id:"inputName","class":"form-control",placeholder:""},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('\n							<label class="control-label" >'),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"errors.name",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('</label>\n\n						</div>\n					</div>\n\n					<div style="display:none" class="form-group" '),i={"class":b},h={"class":"STRING"},e.buffer.push(k(c.bindAttr.call(b,{hash:{"class":"nameStatusClass"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('>\n						<label for="inputName" class="col-lg-4 control-label">Core Belief</label>\n						<div class="col-lg-6">\n							'),i={valueBinding:b,name:b,id:b,"class":b,placeholder:b},h={valueBinding:"STRING",name:"STRING",id:"STRING","class":"STRING",placeholder:"STRING"},e.buffer.push(k(c.view.call(b,"Ember.TextField",{hash:{valueBinding:"core",name:"core",id:"inputCore","class":"form-control",placeholder:""},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('\n							<label class="control-label" >'),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"errors.core",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('</label>\n						</div>\n					</div>\n\n\n					<div style="display:none" class="form-group" '),i={"class":b},h={"class":"STRING"},e.buffer.push(k(c.bindAttr.call(b,{hash:{"class":"passwordStatusClass"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('>\n						<label  class="col-lg-4 control-label">Gods:</label>\n						<div class="col-lg-6">\n							'),i={type:b,valueBinding:b,id:b,"class":b,placeholder:b},h={type:"STRING",valueBinding:"STRING",id:"STRING","class":"STRING",placeholder:"STRING"},e.buffer.push(k(c.view.call(b,"Ember.TextField",{hash:{type:"Gods",valueBinding:"Gods",id:"inputGods","class":"form-control",placeholder:"Gods"},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('\n							<label class="control-label" for="inputGods">'),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"errors.Gods",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('</label>\n						</div>\n					</div>\n\n				</form>\n\n\n\n\n\n\n      </div>\n    </div>\n\n    <div class="modal-footer">\n      <div class="pull-right">\n        <button class=\'btn btn-primary pull-right\' '),h={},i={},e.buffer.push(k(c.action.call(b,"createBeliefSystem","newBeliefSystem",{hash:{},contexts:[b,b],types:["STRING","ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('>Create</button>\n        <button class="btn" style="display:none" '),h={},i={},e.buffer.push(k(c.action.call(b,"closeModal",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(">Close</button>\n      </div>\n    </div>\n    "),h={},i={},g=c.each.call(b,"errors",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n  </div>\n</div>\n\n\n"),j}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push('\n                        <button class="btn btn-primary"> Create new belief system </button>\n')}function g(a,b){var d,e,f,g,i,j="";return b.buffer.push('\n            <div class="col-md-4">\n                <div class="well">\n                    <div class="badge pull-right">'),f={},g={},b.buffer.push(o(c._triageMustache.call(a,"item.followers_count_string",{hash:{},contexts:[a],types:["ID"],hashContexts:g,hashTypes:f,data:b}))),b.buffer.push("</div>\n                     <h4>"),f={},g={},i={hash:{},inverse:p.noop,fn:p.program(4,h,b),contexts:[a,a],types:["STRING","ID"],hashContexts:g,hashTypes:f,data:b},d=c.linkTo||a.linkTo,e=d?d.call(a,"belief_systems.details","item",i):q.call(a,"linkTo","belief_systems.details","item",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("</h4> \n                    <p>"),f={},g={},b.buffer.push(o(c._triageMustache.call(a,"item.core",{hash:{},contexts:[a],types:["ID"],hashContexts:g,hashTypes:f,data:b}))),b.buffer.push('</p>\n                    <ul class="list-group"></ul>\n\n                    <div class="row">\n                        <div class="pull-right">\n                            <button class="btn btn-primary"\n                            '),f={},g={},b.buffer.push(o(c.action.call(a,"followBeliefSystem","item",{hash:{},contexts:[a,a],types:["ID","ID"],hashContexts:g,hashTypes:f,data:b}))),b.buffer.push('>Follow</button>\n\n                            <button class="btn btn-success" '),f={},g={},b.buffer.push(o(c.action.call(a,"forkBeliefSystem","item",{hash:{},contexts:[a,a],types:["ID","ID"],hashContexts:g,hashTypes:f,data:b}))),b.buffer.push(" >Fork</button>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            "),j}function h(a,b){var d,e,f="";return b.buffer.push(" "),d={},e={},b.buffer.push(o(c._triageMustache.call(a,"item.name",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(" "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=this.escapeExpression,p=this,q=c.helperMissing;return e.buffer.push('<div class="row">\n    <div class="well">\n        <h1>Belief Systems created in the last 30 days</h1>\n        <div class="row">\n        <div class="pull-right">\n            '),k={},l={},m={hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c.linkTo||b.linkTo,j=i?i.call(b,"belief_systems_new",m):q.call(b,"linkTo","belief_systems_new",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('\n        </div>\n    </div>\n    </div>\n\n    <div class="row">\n        <div>\n            '),k={},l={},j=c.each.call(b,"item","in","controller",{hash:{},inverse:p.noop,fn:p.program(3,g,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:l,hashTypes:k,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n        </div>\n    </div>"),n}),Ember.TEMPLATES.modal=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push("   "),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.outlet||b.outlet,f?f.call(b,"modalBody",i):k.call(b,"outlet","modalBody",i)))),e.buffer.push("\n   cccc"),j});