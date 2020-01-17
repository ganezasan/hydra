(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),a=(n(0),n(185)),i={id:"config_groups",title:"Config groups",sidebar_label:"Config groups"},c=[],p={id:"version-0.11/tutorial/config_groups",title:"Config groups",description:"This is the most important concept in Hydra.",source:"@site/versioned_docs/version-0.11/tutorial/3_config_groups.md",permalink:"/docs/tutorial/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/3_config_groups.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1578885213,sidebar_label:"Config groups",sidebar:"version-0.11/Docs",previous:{title:"Configuration file",permalink:"/docs/tutorial/config_file"},next:{title:"Defaults",permalink:"/docs/tutorial/defaults"}},l={rightToc:c,metadata:p},s="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(s,Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is the most important concept in Hydra."),Object(a.b)("p",null,"Suppose you want to benchmark PostgreSQL and MySQL for your application.\nWhen running of the application, you will need either MySQL or PostgreSQL - but not both."),Object(a.b)("p",null,"The way to do this with Hydra is with a ",Object(a.b)("strong",{parentName:"p"},"Config group"),".\nA config group is a mutually exclusive set of configuration files."),Object(a.b)("p",null,"To create a config group, create a directory - ",Object(a.b)("inlineCode",{parentName:"p"},"db")," - that will hold\na file for each database configuration alternative.\nSince we are expecting to have multiple config groups, we will proactively move all the configuration\nfiles into a ",Object(a.b)("inlineCode",{parentName:"p"},"conf")," directory."),Object(a.b)("p",null,"Python file: ",Object(a.b)("inlineCode",{parentName:"p"},"my_app.py")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),'@hydra.main(config_path="conf")\ndef my_app(cfg):\n    print(cfg.pretty())\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"config_path")," can specify your config file as in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/tutorial/simple_cli"}),"previous command line example"),", or the root directory for your configuration files.\nIf a config file is specified, its directory is the root directory."),Object(a.b)("p",null,"The directory structure of our application now looks like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2514\u2500\u2500 db\n\u2502\xa0\xa0     \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 postgresql.yaml\n\u2514\u2500\u2500 my_app.py\n")),Object(a.b)("p",null,"If you run it, it prints an empty config because no configuration was specified."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py\n{}\n")),Object(a.b)("p",null,"You can now choose which database configuration to use from the command line:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgre_user\n")),Object(a.b)("p",null,"Like before, you can still override individual values in the resulting config:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgre_user\n")),Object(a.b)("p",null,"This simple example demonstrated a very powerful feature of Hydra:\nYou can compose your configuration object from multiple configuration files."))}u.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o),a=r.a.createContext({}),i=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return r.a.createElement(a.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),u=o,d=s[c+"."+u]||s[u]||l[u]||a;return n?r.a.createElement(d,Object.assign({},{ref:t},p,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);