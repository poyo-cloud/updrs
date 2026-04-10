const SCORE_OPTIONS = [
  { value: "0", short: "0", label: "正常" },
  { value: "1", short: "1", label: "ごく軽度" },
  { value: "2", short: "2", label: "軽度" },
  { value: "3", short: "3", label: "中等度" },
  { value: "4", short: "4", label: "重度" },
];

const FALLBACK_CRITERIA = [
  "問題なし。",
  "ごく軽い問題はあるが、影響は限定的。",
  "明らかな問題があり、いくらか支障がある。",
  "問題が大きく、日常動作にかなり影響する。",
  "重度の問題があり、多くの場面で継続が難しい。",
];

const REPETITIVE_MOVEMENT_CRITERIA = [
  "問題なし。",
  "1〜2回の中断やすくみ、わずかな遅さ、終盤の振幅低下のいずれかがある。",
  "3〜5回の中断、少し遅い、中盤で振幅が減少するなどの明らかな変化がある。",
  "5回を超える中断や長めのすくみがある、遅い、開始直後から振幅が減少するなどの中等度障害がある。",
  "速度低下や中断、振幅減退のため、全く行えないか殆ど行えない。",
];

const TREMOR_1_TO_3_CM_CRITERIA = [
  "振戦なし。",
  "振戦はあるが、振幅は1cm未満。",
  "振戦はあるが、振幅は1cm以上3cm未満。",
  "振戦はあるが、振幅は3cm以上10cm未満。",
  "振幅が10cm以上。",
];

const QUESTION_CRITERIA = {
  "1.1": [
    "認知機能障害なし。",
    "患者や介護者が、日常生活や社会交流を営む上で具体的な影響がないと感じる程度の障害。",
    "臨床上明らかな認知機能障害があるが、日常生活や社会的交流を営む上でわずかな影響しかない。",
    "認知機能障害があり、日常生活や社会的交流を営むことに影響するが、できないわけではない。",
    "認知機能障害のため、日常生活や社会的交流を営むことができない。",
  ],
  "1.2": [
    "幻覚も精神疾患的な行動異常もない。",
    "錯覚もしくは漠然とした幻覚はあるが、患者自身が認識はしている。",
    "外界の刺激から独立したはっきりした幻覚があるが、自覚はある。",
    "自覚のないはっきりした幻覚がある。",
    "妄想や偏執病がある。",
  ],
  "1.3": [
    "抑うつ気分はない。",
    "抑うつ気分はあるが、それが一日以上続くことはなく、また日常生活や社会的交流に影響しない程度である。",
    "抑うつ気分は数日続くが、日常生活や社会的交流に影響する事はない。",
    "抑うつ気分が日常生活や社会的交流に影響が出ているものの、まったく営めなくなるほどではない。",
    "抑うつ気分のため、日常生活や社会的交流が全く営めない。",
  ],
  "1.4": [
    "不安感はない。",
    "不安感はあるが、それが一日以上続くことはなく、また日常生活や社会的交流に影響しない程度である。",
    "不安感は一日を超えて続くが、日常生活や社会的交流に影響する事はない。",
    "不安感が日常生活や社会的交流に影響が出ているものの、まったく営めなくなるほどではない。",
    "不安感のため、日常生活や社会的交流が全く営めない。",
  ],
  "1.5": [
    "無関心はない。",
    "患者自身や介護者が感じている無関心があるが、日常生活や社会的交流に影響する程度ではない。",
    "無関心により、ある種の日常生活や社会的交流に影響が出ている。",
    "無関心により、ほとんどの日常生活や社会的交流に影響が出ている。",
    "受け身で、引きこもり状態、積極性が全くなくなっている。",
  ],
  "1.6": [
    "問題はない。",
    "問題は存在するが、患者や家族・介護者にとって日常的な影響は出ていない。",
    "問題が存在し、患者本人や家族の生活にいくらかの難点が出ている。",
    "問題が存在し、患者本人や家族の生活に多大な難点が出ている。",
    "問題が存在し、日常生活や社会交流を営むことが不可能、あるいは以前の標準的な生活を維持することが不可能。",
  ],
  "1.7": [
    "睡眠の問題はない。",
    "睡眠の問題はあるが、通常は夜を通して悩みになるほどではない。",
    "睡眠の問題があり、夜を通して睡眠をとる事がいくらか難しくなっている。",
    "睡眠の問題があり、夜を通して睡眠をとる事がかなり難しくなっている。ただし、半分以上の時間は眠れている。",
    "夜、殆ど眠れていない。",
  ],
  "1.8": [
    "日中の眠気は全くない。",
    "日中の眠気はあるが、我慢して眠らずにいられる程度ではある。",
    "読書中やTVを観ている時など、独りでいる時や安静にしている時に、時々眠ってしまう。",
    "食事中や、誰かと話している時など、眠ってはいけない時に眠ってしまう事が時々ある。",
    "食事中や、誰かと話している時など、眠ってはいけない時に眠ってしまう事がよくある。",
  ],
  "1.9": [
    "不快感は全くない。",
    "不快な感覚があるが、何かをしたり誰かと一緒にいるのに支障はない。",
    "不快な感覚が、何かをしたり誰かと一緒にいる時にいくらか問題になっている。",
    "不快な感覚がかなり問題になっているが、何かをしたり誰かと一緒にいることができないまでには至らない。",
    "不快な感覚のために、何かをしたり誰かと一緒にいる事ができない。",
  ],
  "1.10": [
    "排尿コントロールに全く問題はない。",
    "頻尿や急な尿意があるが、日常生活に問題は生じていない。",
    "排尿の問題は日常生活にいくらか問題になっているが、尿失禁はない。",
    "排尿の問題が日常生活に多くの問題になっていて、尿失禁もある。",
    "排尿コントロールが出来ず、オムツや尿道カテーテルを使用している。",
  ],
  "1.11": [
    "便秘はない。",
    "便秘はあり、排便に余分な努力を要する。ただし、日常生活を妨げたり不快感を感じるほどではない。",
    "便秘のために日常生活にいくらかの問題があるか、不快に感じる事がある。",
    "便秘のために日常生活に多くの問題があるか、かなり不快になっている。ただし、何かをする事が全くできないわけではない。",
    "排便のためには、通常は誰かの物理的な介助（浣腸や摘便）を要する。",
  ],
  "1.12": [
    "めまいや靄がかかった感じはない。",
    "めまいや靄がかかった感じはあるが、何かをするのに支障はない。",
    "めまいや靄がかかった感じがあり、何かにつかまってしまう。ただし、座ったり横になったりする必要はない。",
    "めまいや靄がかかった感じがあり、失神や転倒を避けるためには座るか寝るかしないといけない。",
    "めまいや靄がかかった感じがあり、失神や転倒を引き起こしてしまう。",
  ],
  "1.13": [
    "疲労はない。",
    "疲労があるが、何かをしたり誰かと一緒にいるのに支障はない。",
    "疲労があり、何かをしたり誰かと一緒にいる時にいくらか問題になっている。",
    "疲労がかなり問題になっているが、何かをしたり誰かと一緒にいることができないまでには至らない。",
    "疲労のために、何かをしたり誰かと一緒にいる事ができない。",
  ],
  "2.1": [
    "全くない。",
    "話し言葉は弱く、不明瞭かあるいはムラがあるものの、聞き返される事はない。",
    "話した際に時折聞き返される事があるが、毎日ではない。",
    "話している事は理解してもらえるものの、話し言葉が不明瞭なため毎日聞き返される。",
    "話している内容がほとんど理解してもらえない。",
  ],
  "2.2": [
    "全くない。",
    "唾液は多いが、流涎はない。",
    "寝ている時にいくらか流涎があるが、起きている時はない。",
    "起きている時にいくらか流涎があるが、ティッシュかハンカチが日常的に必要なほどではない。",
    "流涎が多く、衣服を汚さないために常にティッシュかハンカチを持っていないといけない。",
  ],
  "2.3": [
    "全くない。",
    "咀嚼や嚥下にわずかな難しさはあるが、ムセこみはなく、特別な食事準備も不要。",
    "ゆっくり噛むように気を付けているか、飲み込みにかかる労力が増している。しかし、ムセこみはないか、食事を特別に準備してもらう必要はない。",
    "この一週間で少なくとも一回ムセこんだ事がある、または錠剤を細かくしてもらうか食事を特別に準備してもらう必要がある。",
    "咀嚼・嚥下の問題があるため、経管栄養が必要。",
  ],
  "2.4": [
    "全くない。",
    "ゆっくりではあるが、自分で口元まで食べ物を運べ、食事をこぼす事もない。",
    "食事はゆっくりで時折食べ物をこぼす事がある。肉を切るなどのいくらかの作業を介助してもらう必要がある。",
    "食事動作の多くを介助してもらう必要があるが、少しは自分で管理できる。",
    "殆ど、もしくはすべての食事動作に介助を要する。",
  ],
  "2.5": [
    "全くない。",
    "時間はかかるが、介助は必要ない。",
    "時間がかかり、ボタンやジッパー、装飾品の着脱にいくらかの介助を必要とする。",
    "更衣に関わる多くの事に介助を必要とする。",
    "殆ど、もしくはすべての更衣動作に介助を要する。",
  ],
  "2.6": [
    "全くない。",
    "時間はかかるが、介助は必要ない。",
    "いくらかの衛生行為に、誰かの介助を必要とする。",
    "衛生に関わる多くの事に介助を必要とする。",
    "殆ど、もしくはすべての衛生行為に介助を要する。",
  ],
  "2.7": [
    "全くない。",
    "書くのに時間がかかり、拙く不規則ではあるが、すべての文字がはっきり書けている。",
    "いくらかの文字がわかりにくく、読みづらい。",
    "多くの文字がわかりにくく、読みづらい。",
    "殆ど、もしくはすべての文字が読めない。",
  ],
  "2.8": [
    "全くない。",
    "少し時間がかかるが、容易に趣味などの活動を行えた。",
    "趣味などの活動を行うのに、いくらかの難しさがあった。",
    "趣味などの活動を行うのにかなりの難しさがあったが、まだ殆ど行える。",
    "殆ど、もしくはすべての趣味などの活動が行えない。",
  ],
  "2.9": [
    "全くない。",
    "少し難しさはあるが、独りで行える。",
    "寝返りにかなりの難しさがあるが、まだ自力で行える。",
    "寝返りには、よく誰かの介助を要する。",
    "介助なしでは寝返りできない。",
  ],
  "2.10": [
    "全くない。",
    "震えや振戦があるが、どのような活動にも問題はない。",
    "震えや振戦のため、いくらかの活動には問題が生じている。",
    "震えや振戦のため、多くの日常的な活動に問題が生じている。",
    "震えや振戦のため、殆どもしくはすべての活動に問題が生じている。",
  ],
  "2.11": [
    "全くない。",
    "時間がかかるかぎこちなさがあるが、一回で立ち上がれる。",
    "一回では立ち上がれない事があるか、時折介助を要する。",
    "時々手助けを要するが、多くの場合はまだ独りで行える。",
    "殆ど、もしくはすべてにおいて介助を要する。",
  ],
  "2.12": [
    "全くない。",
    "少し時間がかかるか足を引きずる事がある。補助具は不要。",
    "時折補助具を使用するが、誰かの介助は必要としない。",
    "転倒を防ぐため普段から補助具（杖、歩行器）を使用するが、誰かの介助は必要としない。",
    "安全に歩くためには、誰かの介助を要する。",
  ],
  "2.13": [
    "全くない。",
    "少しの時間足がすくむ事はあるが、再び容易に歩き始める事ができ、介助や補助具（杖や歩行器）は不要。",
    "足がすくんで、再び歩き始めるのが困難な事があるが、介助や補助具（杖や歩行器）は不要。",
    "足がすくんだ場合に再び歩き始めるのが非常に困難で、時折補助具か介助を必要とする。",
    "すくみ足のため、殆どあるいはいつも、補助具か介助を必要とする。",
  ],
  "3.1": [
    "発話の問題はない。",
    "抑揚のなさ、明瞭さあるいは声量の問題があるが、すべての言葉が理解できる。",
    "抑揚のなさ、明瞭さあるいは声量の問題があり、いくつかの単語がわかりにくいものの、全体的な内容は理解できる。",
    "多くではないものの、いくらかの発話内容に理解しづらい点がある。",
    "殆どの発話内容が理解しにくいか、判然としない。",
  ],
  "3.2": [
    "正常な表情。",
    "まばたきの頻度が少ない事によってのみ、わずかな仮面様顔貌が明らかになる。",
    "まばたきの頻度が少ない事に加え、自発的な笑みがなくなるなど口の周りの動きの乏しさが表れる。口は閉じている。",
    "仮面様顔貌があり、口を動かしていない時も、時折口が開いたままになっている。",
    "仮面様顔貌があり、口を動かしていない時も、ほとんどの時間開いたままになっている。",
  ],
  "3.3a": [
    "筋強剛はない。",
    "筋強剛は、誘発的な手技を用いた時のみ出現する。",
    "筋強剛は、誘発的な手技を用いなくても出現するが、他動的に全可動域を容易に動かす事ができる。",
    "筋強剛は、誘発的な手技を用いなくても出現し、他動的に全可動域を動かすには努力を要する。",
    "筋強剛は、誘発的な手技を用いなくても出現し、他動的に全可動域を動かす事ができない。",
  ],
  "3.9": [
    "問題なし。すくみなく、素早く立ち上がれる。",
    "正常より遅い、あるいは2回以上試行した場合、あるいは椅子の前方に移動して立った場合。ひじ掛けを使う必要はない。",
    "ひじ掛けを使えば難なく立ち上がれる。",
    "ひじ掛けを使うが後方へ倒れそうになる、もしくはひじ掛けを使って2回以上の試行が必要だが、介助は必要ない。",
    "介助なしでは立ち上がれない。",
  ],
  "3.10": [
    "問題なし。",
    "わずかな歩行障害はあるが自立。",
    "相当の歩行障害はあるが自立。",
    "安全に歩くには補助具（杖や歩行器）を要するが、人による介助は必要ない。",
    "全く歩けない、あるいは人による介助を要する。",
  ],
  "3.11": [
    "問題なし。",
    "歩き始め、歩行転換時、あるいはドアを通る際に一度立ち止まりが生じるが、その後は直進ではすくみ足なく円滑に歩き続けられる。",
    "歩き始め、歩行転換時、あるいはドアを通る際に、二回以上立ち止まりが生じるが、直進ではすくみ足なく円滑に歩き続けられる。",
    "直進歩行中に一度すくみ足が出る。",
    "直進歩行中に何度もすくみ足が出る。",
  ],
  "3.12": [
    "問題なし。1歩か2歩で姿勢を戻せる。",
    "姿勢を戻すのに3〜5歩要するが、助けは必要ない。",
    "姿勢を戻すのに5歩より多く要するが、助けは必要ない。",
    "安全に立位をとれるが、姿勢反射が欠如していて、検査者が抱えないと転倒する。",
    "非常に不安定で、何もしなくても、あるいは軽く肩を引いただけでバランスが崩れる。",
  ],
  "3.13": [
    "問題なし。",
    "完全な直立ではないが、高齢者では正常である範囲。",
    "明らかな前屈、側屈あるいは一側への傾斜があるが、患者に良い姿勢にするように指示すると姿勢を正す事ができる。",
    "前屈姿勢、側屈あるいは一側への傾斜が見られ、随意的には姿勢を正す事ができない。",
    "極めて異常な姿勢を伴っての前屈、側屈あるいは傾斜。",
  ],
  "3.14": [
    "問題なし。",
    "全体的にわずかな動作の遅さや自発的動作の乏しさが見られる。",
    "全体的に軽度の動作の遅さや自発的動作の乏しさが見られる。",
    "全体的に中等度の動作の遅さや自発的動作の乏しさが見られる。",
    "全体的に重度の動作の遅さや自発的動作の乏しさが見られる。",
  ],
  "3.15a": TREMOR_1_TO_3_CM_CRITERIA,
  "3.15b": TREMOR_1_TO_3_CM_CRITERIA,
  "3.16a": TREMOR_1_TO_3_CM_CRITERIA,
  "3.16b": TREMOR_1_TO_3_CM_CRITERIA,
  "3.17a": [
    "振戦なし。",
    "最大振幅1cm未満。",
    "最大振幅1cm以上2cm未満。",
    "最大振幅2cm以上3cm未満。",
    "最大振幅3cm以上。",
  ],
  "3.17b": [
    "振戦なし。",
    "最大振幅1cm未満。",
    "最大振幅1cm以上2cm未満。",
    "最大振幅2cm以上3cm未満。",
    "最大振幅3cm以上。",
  ],
  "3.17c": [
    "振戦なし。",
    "最大振幅1cm未満。",
    "最大振幅1cm以上2cm未満。",
    "最大振幅2cm以上3cm未満。",
    "最大振幅3cm以上。",
  ],
  "3.17d": [
    "振戦なし。",
    "最大振幅1cm未満。",
    "最大振幅1cm以上2cm未満。",
    "最大振幅2cm以上3cm未満。",
    "最大振幅3cm以上。",
  ],
  "3.17e": [
    "振戦なし。",
    "最大振幅1cm未満。",
    "最大振幅1cm以上3cm未満。",
    "最大振幅3cm以上10cm未満。",
    "最大振幅10cm以上。",
  ],
  "3.18": [
    "安静時振戦なし。",
    "全ての検査時間のうち、25%以下で安静時振戦あり。",
    "全ての検査時間のうち、26〜50%で安静時振戦あり。",
    "全ての検査時間のうち、51〜75%で安静時振戦あり。",
    "全ての検査時間のうち、75%を超えて安静時振戦あり。",
  ],
  "4.1": [
    "ジスキネジアなし。",
    "目覚めている時間のうち、25%以下。",
    "目覚めている時間のうち、25%超50%以下。",
    "目覚めている時間のうち、50%超75%以下。",
    "目覚めている時間のうち、75%超。",
  ],
  "4.2": [
    "ジスキネジアがない、あるいは活動や社会参加への影響はない。",
    "ジスキネジアはいくらかの活動に支障をきたしているが、出ていてもすべての活動や社会参加は行える。",
    "ジスキネジアは多くの活動に支障をきたしているが、出ていてもすべての活動や社会参加は行える。",
    "ジスキネジアが出ている時間はいくらかの活動が行えなかったり、いくらかの社会参加ができなかったりすると言った支障をきたしている。",
    "ジスキネジアが出ている時間は多くの活動が行えなかったり、多くの社会参加が出来なかったりすると言った支障をきたしている。",
  ],
  "4.3": [
    "オフ時間はない。",
    "目覚めている時間のうち、25%以下。",
    "目覚めている時間のうち、25%超50%以下。",
    "目覚めている時間のうち、50%超75%以下。",
    "目覚めている時間のうち、75%超。",
  ],
  "4.4": [
    "変動なし、あるいは活動や社会的交流の遂行において変動の影響はない。",
    "変動の影響はいくらかの活動に生じているが、オフ状態であってもオン状態の時に行える活動や社会的交流は可能。",
    "変動の影響は多くの活動に生じているが、オフ状態であってもオン状態の時に行える活動や社会的交流は可能。",
    "変動の影響により、オフ状態では、オン状態で行える活動や社会的交流のいくらかが行えない。",
    "変動の影響により、オフ状態では、多くの活動や社会的交流が行えない。",
  ],
  "4.5": [
    "運動の変動はない。",
    "オフ状態は、すべて、あるいは殆どの時間に予見できる（75%超）。",
    "オフ状態は、多くの時間に予見できる（50%超75%以下）。",
    "オフ状態は、いくらかの時間に予見できる（25%超50%以下）。",
    "オフ状態は、殆ど予見できない（25%以下）。",
  ],
  "4.6": [
    "ジストニアはない、もしくはオフ状態はない。",
    "オフ状態のうち25%以下。",
    "オフ状態のうち25%超50%以下。",
    "オフ状態のうち50%超75%以下。",
    "オフ状態のうち75%超。",
  ],
};

[
  "3.3b",
  "3.3c",
  "3.3d",
  "3.3e",
].forEach((id) => {
  QUESTION_CRITERIA[id] = QUESTION_CRITERIA["3.3a"];
});

[
  "3.4a",
  "3.4b",
  "3.5a",
  "3.5b",
  "3.6a",
  "3.6b",
  "3.7a",
  "3.7b",
  "3.8a",
  "3.8b",
].forEach((id) => {
  QUESTION_CRITERIA[id] = REPETITIVE_MOVEMENT_CRITERIA;
});

const APP_DATA = [
  {
    id: "part1",
    title: "Part I",
    subtitle: "日常生活の非運動面評価",
    description:
      "Part IA（評価者記入）と Part IB（患者質問票）を1つのタブにまとめています。PDFの説明を見ながら該当するスコアを選択してください。",
    fields: [
      { id: "patientName", label: "氏名", type: "text", placeholder: "例: 山田 太郎" },
      { id: "assessmentDate", label: "評価日", type: "date" },
      { id: "evaluator", label: "評価者", type: "text", placeholder: "例: 訪問看護師A" },
      {
        id: "part1Source",
        label: "Part IA 主な情報源",
        type: "select",
        options: ["", "患者", "介護者", "患者と介護者と同じ程度"],
        help: "参考PDFの「主な情報源」に対応します。",
      },
    ],
    sections: [
      {
        title: "Part IA",
        subtitle: "評価者が記入する複雑行動",
        questions: [
          { id: "1.1", label: "認知障害" },
          { id: "1.2", label: "幻覚や精神症状" },
          { id: "1.3", label: "抑うつ気分" },
          { id: "1.4", label: "不安感" },
          { id: "1.5", label: "無関心" },
          { id: "1.6", label: "ドーパミン調節不全症候群の徴候" },
        ],
      },
      {
        title: "Part IB",
        subtitle: "患者質問票",
        questions: [
          { id: "1.7", label: "睡眠障害" },
          { id: "1.8", label: "日中の眠気" },
          { id: "1.9", label: "痛みや他の感覚" },
          { id: "1.10", label: "泌尿器の問題" },
          { id: "1.11", label: "便秘" },
          { id: "1.12", label: "立ちくらみ" },
          { id: "1.13", label: "疲労" },
        ],
      },
    ],
  },
  {
    id: "part2",
    title: "Part II",
    subtitle: "日常生活における運動症状",
    description:
      "患者質問票の20問のうち、Part IIに該当する項目です。生活場面を思い浮かべながら平均的な状態で入力できます。",
    fields: [
      {
        id: "part2Respondent",
        label: "質問票の記入者",
        type: "select",
        options: ["", "患者", "介護者", "患者＋介護者"],
      },
    ],
    sections: [
      {
        title: "日常生活動作",
        subtitle: "運動症状による影響",
        questions: [
          { id: "2.1", label: "発話" },
          { id: "2.2", label: "唾液と流涎" },
          { id: "2.3", label: "咀嚼と嚥下" },
          { id: "2.4", label: "摂食動作" },
          { id: "2.5", label: "更衣" },
          { id: "2.6", label: "衛生" },
          { id: "2.7", label: "書字" },
          { id: "2.8", label: "趣味やその他の活動" },
          { id: "2.9", label: "寝返り" },
          { id: "2.10", label: "振戦" },
          { id: "2.11", label: "ベッド・車の座席・深い椅子からの立ち上がり" },
          { id: "2.12", label: "歩行とバランス" },
          { id: "2.13", label: "すくみ" },
        ],
      },
    ],
  },
  {
    id: "part3",
    title: "Part III",
    subtitle: "運動症状検査",
    description:
      "Part IIIは評価者が行う運動検査です。スコアに加えて、検査時の薬効やジスキネジアの有無も記録できます。",
    fields: [
      {
        id: "part3Medication",
        label: "パーキンソン病の投薬をうけているか",
        type: "select",
        options: ["", "いいえ", "はい"],
      },
      {
        id: "part3ClinicalState",
        label: "患者の臨床的な状態",
        type: "select",
        options: ["", "オフ", "オン"],
      },
      {
        id: "part3Levodopa",
        label: "Lドパを服用しているか",
        type: "select",
        options: ["", "いいえ", "はい"],
      },
      {
        id: "part3DoseMinutes",
        label: "服用後の時間（分）",
        type: "number",
        placeholder: "例: 45",
      },
      {
        id: "part3DyskinesiaPresent",
        label: "検査中にジスキネジアが出現したか",
        type: "select",
        options: ["", "いいえ", "はい"],
      },
      {
        id: "part3DyskinesiaInterfere",
        label: "ジスキネジアが検査に影響したか",
        type: "select",
        options: ["", "いいえ", "はい"],
      },
      {
        id: "part3HoehnYahr",
        label: "ホーエン・ヤール分類",
        type: "select",
        options: ["", "1", "1.5", "2", "2.5", "3", "4", "5"],
      },
    ],
    sections: [
      {
        title: "発話・筋強剛",
        subtitle: "初期評価",
        questions: [
          { id: "3.1", label: "話し方" },
          { id: "3.2", label: "表情" },
          { id: "3.3a", label: "筋強剛 - 頸部" },
          { id: "3.3b", label: "筋強剛 - 右上肢" },
          { id: "3.3c", label: "筋強剛 - 左上肢" },
          { id: "3.3d", label: "筋強剛 - 右下肢" },
          { id: "3.3e", label: "筋強剛 - 左下肢" },
        ],
      },
      {
        title: "上肢の反復運動",
        subtitle: "右左別に入力",
        questions: [
          { id: "3.4a", label: "指タッピング - 右手" },
          { id: "3.4b", label: "指タッピング - 左手" },
          { id: "3.5a", label: "手の運動 - 右手" },
          { id: "3.5b", label: "手の運動 - 左手" },
          { id: "3.6a", label: "手の回内外の運動 - 右手" },
          { id: "3.6b", label: "手の回内外の運動 - 左手" },
        ],
      },
      {
        title: "下肢・歩行",
        subtitle: "機動性と姿勢",
        questions: [
          { id: "3.7a", label: "つま先タッピング - 右足" },
          { id: "3.7b", label: "つま先タッピング - 左足" },
          { id: "3.8a", label: "下肢の敏捷性 - 右下肢" },
          { id: "3.8b", label: "下肢の敏捷性 - 左下肢" },
          { id: "3.9", label: "椅子からの立ち上がり" },
          { id: "3.10", label: "歩行" },
          { id: "3.11", label: "すくみ足歩行" },
          { id: "3.12", label: "姿勢の安定性" },
          { id: "3.13", label: "姿勢" },
          { id: "3.14", label: "運動の全般的な自発性（身体の動作緩慢）" },
        ],
      },
      {
        title: "振戦",
        subtitle: "姿勢時・運動時・安静時",
        questions: [
          { id: "3.15a", label: "手の姿勢時振戦 - 右手" },
          { id: "3.15b", label: "手の姿勢時振戦 - 左手" },
          { id: "3.16a", label: "手の運動時振戦 - 右手" },
          { id: "3.16b", label: "手の運動時振戦 - 左手" },
          { id: "3.17a", label: "安静時振戦の振幅 - 右上肢" },
          { id: "3.17b", label: "安静時振戦の振幅 - 左上肢" },
          { id: "3.17c", label: "安静時振戦の振幅 - 右下肢" },
          { id: "3.17d", label: "安静時振戦の振幅 - 左下肢" },
          { id: "3.17e", label: "安静時振戦の振幅 - 口唇/下顎" },
          { id: "3.18", label: "安静時振戦の持続性" },
        ],
      },
    ],
  },
  {
    id: "part4",
    title: "Part IV",
    subtitle: "運動合併症",
    description:
      "運動の変動やジスキネジアに関する項目です。具体的な割合や時間の判定は、参考PDFの記述に沿って選択してください。",
    fields: [],
    sections: [
      {
        title: "運動合併症",
        subtitle: "直近1週間の状態",
        questions: [
          { id: "4.1", label: "ジスキネジアの出現時間" },
          { id: "4.2", label: "ジスキネジアの機能的影響" },
          { id: "4.3", label: "オフ状態で過ごす時間" },
          { id: "4.4", label: "変動の機能的影響" },
          { id: "4.5", label: "運動の変動の複雑性" },
          { id: "4.6", label: "痛みを伴うオフ状態のジストニア" },
        ],
      },
    ],
  },
];

const state = {
  activePartId: APP_DATA[0].id,
};

const scoreLabelMap = Object.fromEntries(
  SCORE_OPTIONS.map((option) => [option.value, `${option.short} (${option.label})`]),
);

const tabsRoot = document.getElementById("partTabs");
const panelsRoot = document.getElementById("partPanels");
const formView = document.getElementById("formView");
const outputView = document.getElementById("outputView");
const outputText = document.getElementById("outputText");
const copyStatus = document.getElementById("copyStatus");

function flattenQuestions(part) {
  return part.sections.flatMap((section) => section.questions);
}

function getQuestionInputName(questionId) {
  return `score_${questionId}`;
}

function getQuestionValue(questionId) {
  const checked = document.querySelector(`input[name="${getQuestionInputName(questionId)}"]:checked`);
  return checked ? checked.value : "";
}

function getFieldValue(fieldId) {
  const field = document.getElementById(fieldId);
  return field ? field.value.trim() : "";
}

function getQuestionCriteria(questionId) {
  return QUESTION_CRITERIA[questionId] || FALLBACK_CRITERIA;
}

function getPartStats(part) {
  const questions = flattenQuestions(part);
  const answered = questions.filter((question) => getQuestionValue(question.id) !== "").length;
  const total = questions.reduce((sum, question) => {
    const value = getQuestionValue(question.id);
    return sum + (value === "" ? 0 : Number(value));
  }, 0);
  return {
    answered,
    count: questions.length,
    missing: questions.length - answered,
    total,
  };
}

function getOverallStats() {
  return APP_DATA.reduce(
    (aggregate, part) => {
      const partStats = getPartStats(part);
      return {
        answered: aggregate.answered + partStats.answered,
        count: aggregate.count + partStats.count,
        missing: aggregate.missing + partStats.missing,
        total: aggregate.total + partStats.total,
      };
    },
    { answered: 0, count: 0, missing: 0, total: 0 },
  );
}

function renderField(field) {
  const helpText = field.help ? `<p class="field-help">${field.help}</p>` : "";
  if (field.type === "select") {
    return `
      <div class="field-card">
        <label for="${field.id}">${field.label}</label>
        <select id="${field.id}">
          ${field.options
            .map((option) => `<option value="${option}">${option || "選択してください"}</option>`)
            .join("")}
        </select>
        ${helpText}
      </div>
    `;
  }

  return `
    <div class="field-card">
      <label for="${field.id}">${field.label}</label>
      <input id="${field.id}" type="${field.type}" placeholder="${field.placeholder || ""}" />
      ${helpText}
    </div>
  `;
}

function renderQuestion(question) {
  const criteria = getQuestionCriteria(question.id);
  return `
    <article class="question-card">
      <div class="question-header">
        <div>
          <span class="question-code">${question.id}</span>
          <label>${question.label}</label>
        </div>
      </div>
      <div class="option-list" role="radiogroup" aria-label="${question.id} ${question.label}">
        ${SCORE_OPTIONS.map(
          (option, index) => `
            <label class="option-card">
              <input
                type="radio"
                name="${getQuestionInputName(question.id)}"
                value="${option.value}"
              />
              <span class="option-card-body">
                <span class="option-topline">
                  <strong class="option-score">${option.short}</strong>
                  <span class="option-label">${option.label}</span>
                </span>
                <span class="option-description">${criteria[index] || ""}</span>
              </span>
            </label>
          `,
        ).join("")}
      </div>
    </article>
  `;
}

function renderApp() {
  tabsRoot.innerHTML = APP_DATA.map(
    (part) => `
      <button
        type="button"
        class="tab-button${part.id === state.activePartId ? " is-active" : ""}"
        data-part-target="${part.id}"
      >
        <span class="tab-title">
          <strong>${part.title}</strong>
          <span>${part.subtitle}</span>
        </span>
        <span class="tab-badge" id="badge-${part.id}">0点</span>
      </button>
    `,
  ).join("");

  panelsRoot.innerHTML = APP_DATA.map((part) => {
    const fieldsMarkup = part.fields.length
      ? `<div class="meta-grid">${part.fields.map(renderField).join("")}</div>`
      : "";

    const sectionsMarkup = part.sections
      .map(
        (section) => `
          <section class="section-card">
            <h3>${section.title}</h3>
            <p>${section.subtitle}</p>
            <div class="questions-list">
              ${section.questions.map(renderQuestion).join("")}
            </div>
          </section>
        `,
      )
      .join("");

    return `
      <section class="part-panel${part.id === state.activePartId ? " is-active" : ""}" id="${part.id}">
        <div class="part-header">
          <div>
            <p class="eyebrow">${part.title}</p>
            <h2>${part.subtitle}</h2>
            <p>${part.description}</p>
          </div>
          <aside class="part-stats">
            <strong id="score-${part.id}">0</strong>
            <span id="count-${part.id}">0 / ${flattenQuestions(part).length} 入力済み</span>
            <span id="missing-${part.id}">未入力: ${flattenQuestions(part).length}</span>
          </aside>
        </div>
        ${fieldsMarkup}
        <div class="section-grid">
          ${sectionsMarkup}
        </div>
      </section>
    `;
  }).join("");
}

function activatePart(partId) {
  state.activePartId = partId;
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.partTarget === partId);
  });
  document.querySelectorAll(".part-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === partId);
  });
}

function updateSummary() {
  APP_DATA.forEach((part) => {
    const stats = getPartStats(part);
    document.getElementById(`badge-${part.id}`).textContent = `${stats.total}点`;
    document.getElementById(`score-${part.id}`).textContent = String(stats.total);
    document.getElementById(`count-${part.id}`).textContent = `${stats.answered} / ${stats.count} 入力済み`;
    document.getElementById(`missing-${part.id}`).textContent = `未入力: ${stats.missing}`;
  });

  const overall = getOverallStats();
  document.getElementById("overallTotal").textContent = String(overall.total);
  document.getElementById("overallAnswered").textContent = `${overall.answered} / ${overall.count}`;
  document.getElementById("overallMissing").textContent = String(overall.missing);
}

function buildOutputText() {
  const lines = [];
  const patientName = getFieldValue("patientName");
  const assessmentDate = getFieldValue("assessmentDate");
  const evaluator = getFieldValue("evaluator");
  if (patientName) {
    lines.push(`氏名: ${patientName}`);
  }
  if (assessmentDate) {
    lines.push(`評価日: ${assessmentDate}`);
  }
  if (evaluator) {
    lines.push(`評価者: ${evaluator}`);
  }
  if (lines.length) {
    lines.push("");
  }

  APP_DATA.forEach((part) => {
    const stats = getPartStats(part);
    lines.push(`[${part.title} ${part.subtitle}]`);
    lines.push(`点数: ${stats.total}点`);
    part.fields.forEach((field) => {
      const value = getFieldValue(field.id);
      if (value) {
        lines.push(`${field.label}: ${value}`);
      }
    });

    part.sections.forEach((section) => {
      if (part.sections.length > 1) {
        lines.push(`${section.title}:`);
      }
      section.questions.forEach((question) => {
        const value = getQuestionValue(question.id);
        lines.push(
          `${question.id} ${question.label}: ${value === "" ? "未入力" : scoreLabelMap[value]}`,
        );
      });
    });
    lines.push("");
  });
  return lines.join("\n");
}

function showOutputView() {
  outputText.value = buildOutputText();
  copyStatus.textContent = "";
  formView.classList.remove("is-active");
  outputView.classList.add("is-active");
  outputText.focus();
  outputText.setSelectionRange(0, 0);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showFormView() {
  outputView.classList.remove("is-active");
  formView.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetForm() {
  const shouldReset = window.confirm("入力内容をリセットしますか？");
  if (!shouldReset) {
    return;
  }

  formView.querySelectorAll("input").forEach((input) => {
    if (input.type === "radio") {
      input.checked = false;
      return;
    }
    input.value = "";
  });

  formView.querySelectorAll("select").forEach((select) => {
    select.selectedIndex = 0;
  });

  activatePart(APP_DATA[0].id);
  updateSummary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function copyOutputText() {
  outputText.select();
  outputText.setSelectionRange(0, outputText.value.length);

  try {
    await navigator.clipboard.writeText(outputText.value);
    copyStatus.textContent = "テキストをコピーしました。";
  } catch (error) {
    const copied = document.execCommand("copy");
    copyStatus.textContent = copied
      ? "テキストをコピーしました。"
      : "コピーに失敗しました。手動でテキストを選択してコピーしてください。";
  }
}

renderApp();
updateSummary();

tabsRoot.addEventListener("click", (event) => {
  const button = event.target.closest("[data-part-target]");
  if (!button) {
    return;
  }
  activatePart(button.dataset.partTarget);
});

document.addEventListener("change", (event) => {
  if (event.target.matches("input[type='radio'], input, select")) {
    updateSummary();
  }
});

document.getElementById("exportButton").addEventListener("click", showOutputView);
document.getElementById("resetButton").addEventListener("click", resetForm);
document.getElementById("backButton").addEventListener("click", showFormView);
document.getElementById("copyButton").addEventListener("click", copyOutputText);
document.getElementById("scrollTopButton").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
