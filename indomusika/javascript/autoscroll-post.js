var speed=1; var disp=0; var handle; var currentspeed=0; var status=1; var currentpos=0, alt=1, curpos1=0, curpos2=-1; var color=new Array(); color[1]=&quot;#ddd&quot;; color[2]=&quot;#ccc&quot;; color[3]=&quot;#bbb&quot;; color[4]=&quot;#aaa&quot;; color[5]=&quot;#999&quot;; var interval=new Array(400, 300, 200, 100, 30); function scrollwindow(){if (status==1){if (document.all &amp;&amp; !document.getElementById) temp=document.body.scrollTop; else temp=window.pageYOffset; if (alt==0) alt=2; else alt=1; if (curpos1 !=curpos2){if (document.all) currentpos=document.body.scrollTop + speed; else currentpos=window.pageYOffset + speed; window.scroll(0, currentpos);}else{currentpos=0; window.scroll(0, currentpos);}}}function startit(s){status=1; currentspeed=s; clearInterval(handle); handle=setInterval(&quot;scrollwindow()&quot;, interval[s]);}function stopit(){currentspeed=0; for (i=1; i &lt;=5; i++){document.getElementById(&#39;speed&#39; + i).style.backgroundColor=color[i];}status=0;}function resetBg(n){for (i=1; i &lt;=5; i++){document.getElementById(&#39;speed&#39; + i).style.backgroundColor=color[i];}for (i=1; i &lt;=currentspeed; i++){document.getElementById(&#39;speed&#39; + i).style.backgroundColor=&quot;#00cc00&quot;;}}function changeBg(n){for (i=1; i &lt;=5; i++){document.getElementById(&#39;speed&#39; + i).style.backgroundColor=color[i];}for (i=1; i &lt;=n; i++){document.getElementById(&#39;speed&#39; + i).style.backgroundColor=&quot;#00cc00&quot;;}}function tooglespeed(){if (disp==0){disp=1; document.getElementById(&#39;speednav&#39;).style.display=&#39;&#39;; document.getElementById(&#39;speedtoogle&#39;).innerHTML=&#39;&lt;img width=&quot;11&quot; height=&quot;66&quot; src=&quot;https://www.chordtela.com/wp-content/uploads/2020/10/chordtelascrl.png&quot; style=&quot;border-right:1px solid #AAA;&quot;/&gt;&#39;; document.getElementById(&#39;speedtoogle&#39;);}else{disp=0; document.getElementById(&#39;speednav&#39;).style.display=&#39;none&#39;; document.getElementById(&#39;speedtoogle&#39;).innerHTML=&#39;&lt;img width=&quot;11&quot; height=&quot;66&quot; src=&quot;https://www.chordtela.com/wp-content/uploads/2020/10/telascrl.png&quot; style=&quot;border-right:1px solid #AAA;&quot;/&gt;&#39;; document.getElementById(&#39;speedtoogle&#39;);}}function calcHeight(){var the_height=document.getElementById(&#39;chord_frame&#39;).contentWindow.document.body.scrollHeight; document.getElementById(&#39;chord_frame&#39;).height=the_height;}