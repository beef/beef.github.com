Backbone.pubSub=_.extend({},Backbone.Events);var AppView=Backbone.View.extend({events:{"click .button":"routeIt","click .case-study-menu .close":"closeOverlay"},initialize:function(){Backbone.pubSub.on("onDomChangeTitle",this.onDomChangeTitle,this)},routeIt:function(e){var t="";if(typeof e.currentTarget.pathname=="undefined"){var n=document.createElement("a");n.href=$(e.currentTarget).attr("data-url"),t=n.pathname}else t=e.currentTarget.pathname;router.navigate(t,{trigger:!0}),e.stopPropagation(),e.preventDefault()},onDomChangeTitle:function(){var e=window.location.pathname;title=e.substring(e.lastIndexOf("/")+1),title?(title=title.replace(new RegExp("-","g")," "),title=title.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})):title="Beef are an award-winning, multi-disciplinary creative studio",$(document).attr("title",title+" | Beef")},closeOverlay:function(e){Backbone.pubSub.trigger("hideOverlay"),router.navigate(e.currentTarget.pathname),e.preventDefault()}});