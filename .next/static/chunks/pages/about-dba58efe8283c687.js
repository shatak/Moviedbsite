(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{512:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(6075)}])},8444:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(5893),s=t(682),i=t(4184),a=t.n(i),o=t(7294),l=t(6792);let d=o.forwardRef(({bsPrefix:e,className:r,as:t="div",...s},i)=>{let o=(0,l.vE)(e,"row"),d=(0,l.pi)(),c=(0,l.zG)(),u=`${o}-cols`,f=[];return d.forEach(e=>{let r=s[e];delete s[e];let t;null!=r&&"object"==typeof r?{cols:t}=r:t=r;let n=e!==c?`-${e}`:"";null!=t&&f.push(`${u}${n}-${t}`)}),(0,n.jsx)(t,{ref:i,...s,className:a()(r,o,...f)})});d.displayName="Row";let c=o.forwardRef((e,r)=>{let[{className:t,...s},{as:i="div",bsPrefix:o,spans:d}]=function({as:e,bsPrefix:r,className:t,...n}){r=(0,l.vE)(r,"col");let s=(0,l.pi)(),i=(0,l.zG)(),o=[],d=[];return s.forEach(e=>{let t=n[e];delete n[e];let s,a,l;"object"==typeof t&&null!=t?{span:s,offset:a,order:l}=t:s=t;let c=e!==i?`-${e}`:"";s&&o.push(!0===s?`${r}${c}`:`${r}${c}-${s}`),null!=l&&d.push(`order${c}-${l}`),null!=a&&d.push(`offset${c}-${a}`)}),[{...n,className:a()(t,...o,...d)},{as:e,bsPrefix:r,spans:o}]}(e);return(0,n.jsx)(i,{...s,ref:r,className:a()(t,!d.length&&o)})});function u(e){var r=e.movie;return(0,n.jsx)(s.Z,{children:(0,n.jsxs)(d,{children:[r.poster&&(0,n.jsxs)(c,{md:!0,children:[(0,n.jsx)("img",{src:r.poster,alt:r.title,className:"w-100"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)("strong",{children:"Directed By: "})," ",r.directors.join(", "),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:r.fullplot}),(0,n.jsx)("strong",{children:"Cast: "})," ",r.cast.join(", "),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Awards: "})," ",r.awards.text,(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"IMDB Rating: "})," ",r.imdb.rating," (",r.imdb.votes,"\xa0votes)"]})]})})}c.displayName="Col"},7031:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(5893),s=t(8182);function i(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{className:"bg-light",children:(0,n.jsx)(s.Z.Body,{children:(0,n.jsx)("strong",{children:e.text})})}),(0,n.jsx)("br",{})]})}},6075:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return o},default:function(){return l}});var n=t(5893),s=t(8182),i=t(8444),a=t(7031),o=!0;function l(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{text:"About the Developer"}),(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(s.Z.Body,{children:(0,n.jsxs)(s.Z.Text,{children:[(0,n.jsx)("p",{children:"My name is Akshat Jain. My interest areas are Web Development, User Experience(UX), branding and animation. I like transforming concepts and ideas into a presentable and tangible form. I find the ability to influence opinions and emotions through visuals and motion very empowering, and hope to use my abilities to create an impact on people's lives."}),(0,n.jsxs)("p",{children:["A movie that I liked was"," ",(0,n.jsx)(s.Z.Link,{href:"/movies/City Lights",children:"City Lights"})]})]})}),(0,n.jsx)(i.Z,{movie:e.movie})]})]})}},8182:function(e,r,t){"use strict";t.d(r,{Z:function(){return $}});var n=t(4184),s=t.n(n),i=t(7294),a=t(6792),o=t(6611),l=t(9602),d=t(5893);let c=i.forwardRef(({bsPrefix:e,className:r,variant:t,as:n="img",...i},o)=>{let l=(0,a.vE)(e,"card-img");return(0,d.jsx)(n,{ref:o,className:s()(t?`${l}-${t}`:l,r),...i})});c.displayName="CardImg";var u=t(9059);let f=i.forwardRef(({bsPrefix:e,className:r,as:t="div",...n},o)=>{let l=(0,a.vE)(e,"card-header"),c=(0,i.useMemo)(()=>({cardHeaderBsPrefix:l}),[l]);return(0,d.jsx)(u.Z.Provider,{value:c,children:(0,d.jsx)(t,{ref:o,...n,className:s()(r,l)})})});f.displayName="CardHeader";let h=(0,l.Z)("h5"),x=(0,l.Z)("h6"),m=(0,o.Z)("card-body"),j=(0,o.Z)("card-title",{Component:h}),p=(0,o.Z)("card-subtitle",{Component:x}),v=(0,o.Z)("card-link",{Component:"a"}),b=(0,o.Z)("card-text",{Component:"p"}),g=(0,o.Z)("card-footer"),y=(0,o.Z)("card-img-overlay"),Z=i.forwardRef(({bsPrefix:e,className:r,bg:t,text:n,border:i,body:o,children:l,as:c="div",...u},f)=>{let h=(0,a.vE)(e,"card");return(0,d.jsx)(c,{ref:f,...u,className:s()(r,h,t&&`bg-${t}`,n&&`text-${n}`,i&&`border-${i}`),children:o?(0,d.jsx)(m,{children:l}):l})});Z.displayName="Card",Z.defaultProps={body:!1};var $=Object.assign(Z,{Img:c,Title:j,Subtitle:p,Body:m,Link:v,Text:b,Header:f,Footer:g,ImgOverlay:y})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=512)}),_N_E=e.O()}]);