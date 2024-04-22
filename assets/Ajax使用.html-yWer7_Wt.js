import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as o,a as n,d as e,b as c,e as u}from"./app-DXZXj8Ho.js";const l={},i=n("h3",{id:"总结jquery中ajax的使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总结jquery中ajax的使用"},[n("span",null,"总结jQuery中Ajax的使用")])],-1),r={href:"https://api.jquery.com/jQuery.ajaxPrefilter/",target:"_blank",rel:"noopener noreferrer"},k=u(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 设置AJAX的全局默认选项</span>
$<span class="token punctuation">.</span><span class="token function">ajaxSetup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span> <span class="token punctuation">,</span> <span class="token comment">// 默认使用POST方式</span>
    <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;JSON&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 默认接收数据为JSON</span>
	<span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 添加默认请求头</span>
		<span class="token string-property property">&quot;Author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Author&quot;</span> <span class="token punctuation">,</span>
		<span class="token string-property property">&quot;Powered-By&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CodePlayer&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;content-type&quot;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 内容类型</span>
        <span class="token string-property property">&quot;X-Client-Version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.5.1&quot;</span>
	<span class="token punctuation">}</span> <span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span>status<span class="token punctuation">,</span>xhr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;$.ajaxSetup ===== 当前请求成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">error</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">xhr<span class="token punctuation">,</span>status<span class="token punctuation">,</span>error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 提示形如：发送AJAX请求到&quot;/index.html&quot;时出错[404]：Not Found</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">发送AJAX请求到</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">时出错[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>xhr<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 指定预处理参数选项的函数</span>
$<span class="token punctuation">.</span><span class="token function">ajaxPrefilter</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> originalOptions<span class="token punctuation">,</span> jqXHR</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span> options<span class="token punctuation">.</span>data <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		options<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 将请求方式改为GET			</span>
	<span class="token punctuation">}</span>
    <span class="token keyword">let</span> onBeforeSend <span class="token operator">=</span> options<span class="token punctuation">.</span>beforeSend<span class="token punctuation">;</span>
    <span class="token keyword">let</span> onSuccess <span class="token operator">=</span> options<span class="token punctuation">.</span>success<span class="token punctuation">;</span>
    <span class="token keyword">let</span> onError <span class="token operator">=</span> options<span class="token punctuation">.</span>error<span class="token punctuation">;</span>
    options<span class="token punctuation">.</span><span class="token function-variable function">beforeSend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">xhr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> onBeforeSend <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token function">onBeforeSend</span><span class="token punctuation">(</span>xhr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    options<span class="token punctuation">.</span><span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> status<span class="token punctuation">,</span> xhr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$.ajaxPrefilter ===== ajaxPrefilter中success插入的输出</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> onSuccess <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token function">onSuccess</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> status<span class="token punctuation">,</span> xhr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    options<span class="token punctuation">.</span><span class="token function-variable function">error</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">xhr<span class="token punctuation">,</span> status<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$.ajaxPrefilter ===== ajaxPrefilter中error插入的输出</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> onError <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token function">onError</span><span class="token punctuation">(</span>xhr<span class="token punctuation">,</span> status<span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(m,f){const s=t("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[n("a",r,[e("$.ajaxPrefilter文档地址"),c(s)])]),k])}const g=a(l,[["render",d],["__file","Ajax使用.html.vue"]]),h=JSON.parse('{"path":"/frontend/Ajax%E4%BD%BF%E7%94%A8.html","title":"Ajax使用","lang":"zh-CN","frontmatter":{"title":"Ajax使用","date":"2024-04-12T17:07:05.000Z","description":"总结jQuery中Ajax的使用 $.ajaxPrefilter文档地址","head":[["meta",{"property":"og:url","content":"https://dahlzb.github.io/docs/frontend/Ajax%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"DahlZb小站"}],["meta",{"property":"og:title","content":"Ajax使用"}],["meta",{"property":"og:description","content":"总结jQuery中Ajax的使用 $.ajaxPrefilter文档地址"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-22T11:57:08.000Z"}],["meta",{"property":"article:author","content":"DahlZb"}],["meta",{"property":"article:published_time","content":"2024-04-12T17:07:05.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-22T11:57:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ajax使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-12T17:07:05.000Z\\",\\"dateModified\\":\\"2024-04-22T11:57:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DahlZb\\",\\"url\\":\\"https://github.com/dahlzb\\"}]}"]]},"headers":[{"level":3,"title":"总结jQuery中Ajax的使用","slug":"总结jquery中ajax的使用","link":"#总结jquery中ajax的使用","children":[]}],"git":{"createdTime":1713787028000,"updatedTime":1713787028000,"contributors":[{"name":"dahlzb","email":"1304187196@qq.com","commits":1}]},"readingTime":{"minutes":0.78,"words":235},"filePathRelative":"frontend/Ajax使用.md","localizedDate":"2024年4月12日","excerpt":"<h3>总结jQuery中Ajax的使用</h3>\\n<p><a href=\\"https://api.jquery.com/jQuery.ajaxPrefilter/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">$.ajaxPrefilter文档地址</a></p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 设置AJAX的全局默认选项</span>\\n$<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ajaxSetup</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"POST\\"</span> <span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 默认使用POST方式</span>\\n    <span class=\\"token literal-property property\\">dataType</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"JSON\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 默认接收数据为JSON</span>\\n\\t<span class=\\"token literal-property property\\">headers</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">// 添加默认请求头</span>\\n\\t\\t<span class=\\"token string-property property\\">\\"Author\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Author\\"</span> <span class=\\"token punctuation\\">,</span>\\n\\t\\t<span class=\\"token string-property property\\">\\"Powered-By\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"CodePlayer\\"</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string-property property\\">\\"content-type\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\'application/json\'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 内容类型</span>\\n        <span class=\\"token string-property property\\">\\"X-Client-Version\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"1.0.5.1\\"</span>\\n\\t<span class=\\"token punctuation\\">}</span> <span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function-variable function\\">success</span><span class=\\"token operator\\">:</span><span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">result<span class=\\"token punctuation\\">,</span>status<span class=\\"token punctuation\\">,</span>xhr</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"$.ajaxSetup ===== 当前请求成功\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token function-variable function\\">error</span><span class=\\"token operator\\">:</span><span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">xhr<span class=\\"token punctuation\\">,</span>status<span class=\\"token punctuation\\">,</span>error</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 提示形如：发送AJAX请求到\\"/index.html\\"时出错[404]：Not Found</span>\\n        console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">发送AJAX请求到</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>url<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">时出错[</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>xhr<span class=\\"token punctuation\\">.</span>status<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">]:</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>error<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 指定预处理参数选项的函数</span>\\n$<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ajaxPrefilter</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">options<span class=\\"token punctuation\\">,</span> originalOptions<span class=\\"token punctuation\\">,</span> jqXHR</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span> options<span class=\\"token punctuation\\">.</span>data <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">&amp;&amp;</span> options<span class=\\"token punctuation\\">.</span>type <span class=\\"token operator\\">==</span> <span class=\\"token string\\">\\"POST\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\toptions<span class=\\"token punctuation\\">.</span>type <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"GET\\"</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 将请求方式改为GET\\t\\t\\t</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">let</span> onBeforeSend <span class=\\"token operator\\">=</span> options<span class=\\"token punctuation\\">.</span>beforeSend<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">let</span> onSuccess <span class=\\"token operator\\">=</span> options<span class=\\"token punctuation\\">.</span>success<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">let</span> onError <span class=\\"token operator\\">=</span> options<span class=\\"token punctuation\\">.</span>error<span class=\\"token punctuation\\">;</span>\\n    options<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">beforeSend</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">xhr</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> onBeforeSend <span class=\\"token operator\\">===</span> <span class=\\"token string\\">\\"function\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token function\\">onBeforeSend</span><span class=\\"token punctuation\\">(</span>xhr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    options<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">success</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">data<span class=\\"token punctuation\\">,</span> status<span class=\\"token punctuation\\">,</span> xhr</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">$.ajaxPrefilter ===== ajaxPrefilter中success插入的输出</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> onSuccess <span class=\\"token operator\\">===</span> <span class=\\"token string\\">\\"function\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token function\\">onSuccess</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">,</span> status<span class=\\"token punctuation\\">,</span> xhr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    options<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">error</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">xhr<span class=\\"token punctuation\\">,</span> status<span class=\\"token punctuation\\">,</span> error</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">$.ajaxPrefilter ===== ajaxPrefilter中error插入的输出</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> onError <span class=\\"token operator\\">===</span> <span class=\\"token string\\">\\"function\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token function\\">onError</span><span class=\\"token punctuation\\">(</span>xhr<span class=\\"token punctuation\\">,</span> status<span class=\\"token punctuation\\">,</span> error<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{g as comp,h as data};
