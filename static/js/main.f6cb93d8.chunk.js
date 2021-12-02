(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},15:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},20:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),c=a.n(r),s=(a(20),a(12)),l=a(3),i=a(4),h=a(6),u=a(5),m=a(13),d=a.n(m),g=a(7),b=a.n(g),p=a(0),j=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={search:""},e.handleChange=function(t){e.setState({search:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.search),e.reset()},e.reset=function(){e.setState({search:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:b.a.Searchbar,children:Object(p.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(p.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:this.state.search,onChange:this.handleChange,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),f=a(10),I=a.n(f),S=function(e){var t=e.id,a=e.smallImage,n=e.bigImage,o=e.alt,r=e.onImageClick;return Object(p.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(p.jsx)("img",{className:I.a.ImageGalleryItemImage,src:a,alt:o,"data-source":n,onClick:r})},t)},y=a(14),O=a.n(y),v=function(e){var t=e.images,a=e.onImageClick;return Object(p.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){return Object(p.jsx)(S,{id:e.id,smallImage:e.webformatURL,bigImage:e.largeImageURL,alt:e.tags,onImageClick:a},e.id)}))})},_=a(11),x=a.n(_),w=document.querySelector("#modal-root"),k=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(p.jsx)("div",{className:x.a.Overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:x.a.Modal,children:Object(p.jsx)("img",{src:this.props.bigImage,alt:this.props.alt})})}),w)}}]),a}(n.Component),C=k,F=a(15),M=a.n(F),B=function(e){var t=e.loadMore;return Object(p.jsx)("button",{type:"button",className:M.a.Button,onClick:t,children:"Load more"})};var G={fetchImages:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("24617843-72c68f87ed3d0c63f61468751","&image_type=photo&orientation=horizontal&per_page=12\n")).then((function(e){return e.json()}))}},N=(a(42),"idle"),L="pending",A="resolved",D="rejected",T=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={search:"",images:[],page:1,showModal:!1,modalSrc:"",modalAlt:"",status:N},e.handleFetch=function(){e.setState({status:L}),setTimeout((function(){G.fetchImages(e.state.search,e.state.page).then((function(t){return e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.hits)),page:e.page+1,status:A}}))})).catch(e.setState({status:D}))}),700)},e.handleFormSubmit=function(t){e.setState({search:t,images:[],page:1,status:N})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImageClick=function(t){console.log(t.target.dataset.source),e.setState({modalSrc:t.target.dataset.source,modalAlt:t.target.alt,showModal:!0})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&this.handleFetch(),setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),700)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(j,{onSubmit:this.handleFormSubmit}),Object(p.jsx)(v,{images:this.state.images,onImageClick:this.onImageClick}),"pending"===this.state.status&&Object(p.jsx)("div",{className:"Loader",children:Object(p.jsx)(d.a,{type:"Hearts",color:"#3f51b5",height:200,width:200,timeout:3e3})}),"resolved"===this.state.status&&Object(p.jsx)(B,{loadMore:this.handleFetch}),this.state.showModal&&Object(p.jsx)(C,{bigImage:this.state.modalSrc,alt:this.state.modalAlt,onClose:this.toggleModal})]})}}]),a}(n.Component),E=T;c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1l5fH",SearchForm:"Searchbar_SearchForm__1punG",SearchFormButton:"Searchbar_SearchFormButton__1GWQ9",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3sN6h",SearchFormInput:"Searchbar_SearchFormInput__miQ5w"}}},[[43,1,2]]]);
//# sourceMappingURL=main.f6cb93d8.chunk.js.map