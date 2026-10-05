const lessons = [
  {
    id:'naat', n:'01', title:'التوابع — النعت', type:'قواعد', icon:'✦',
    desc:'النعت تابع يصف متبوعه، ويوافقه في الإعراب والتعريف والتنكير والتذكير والتأنيث والعدد.',
    summary:'افهم معنى النعت، أنواعه، المطابقة، والنعت الحقيقي والسببي، ثم طبّق طريقة ثابتة لاستخراجه وإعرابه.',
    sections:[
      {title:'الفكرة الأساسية',text:'التوابع ألفاظ تتبع ما قبلها في الإعراب، ومن التوابع التي يركز عليها هذا الفصل: النعت والتوكيد والبدل والعطف. النعت تابع يصف متبوعه ويبين صفته أو يخصصه.',tag:'شرح'},
      {title:'ماذا يطابق النعت؟',text:'في النعت الحقيقي يوافق النعت منعوته في الإعراب، والتعريف والتنكير، والتذكير والتأنيث، والإفراد والتثنية والجمع. مثال: جاء الطالبُ المجتهدُ، ورأيتُ الطالبَ المجتهدَ.',tag:'قاعدة'},
      {title:'النعت المفرد',text:'المفرد هنا يعني ما ليس جملة ولا شبه جملة، سواء أكان مفردًا أم مثنى أم جمعًا. مثال: قرأتُ كتابًا مفيدًا. «مفيدًا» نعت منصوب وعلامة نصبه الفتحة.',tag:'مثال'},
      {title:'النعت الجملة',text:'قد يأتي النعت جملة اسمية أو فعلية، ويجب أن يوجد رابط يربط الجملة بالمنعوت. مثال: رأيتُ طالبًا أخلاقُه عاليةٌ. الجملة الاسمية «أخلاقه عالية» في محل نصب نعت.',tag:'مثال'},
      {title:'النعت شبه الجملة',text:'قد يأتي النعت جارًا ومجرورًا أو ظرفًا إذا دلّ على صفة في المنعوت. مثال: رأيتُ بيتًا في الجبل. «في الجبل» شبه جملة في محل نصب نعت بحسب السياق.',tag:'مثال'},
      {title:'النعت الحقيقي والسببي',text:'النعت الحقيقي يصف المنعوت نفسه. أما النعت السببي فيصف اسمًا له علاقة بالمنعوت، ويتبع المنعوت في الإعراب والتعريف والتنكير، ويراعي الاسم الذي بعده في التذكير والتأنيث.',tag:'مهم'},
      {title:'كيف أحل السؤال؟',text:'1) حدّد الاسم الموصوف. 2) ابحث عما يصفه بعده. 3) افحص المطابقة في الإعراب والتعريف والتنكير والعدد والجنس. 4) إذا كان الوصف جملة أو شبه جملة، ابحث عن الرابط وحدد محل الجملة أو شبه الجملة.',tag:'طريقة الحل'},
      {title:'⭐ ما يجب حفظه',text:'تعريف النعت، أوجه المطابقة، الفرق بين الحقيقي والسببي، وصور النعت: مفرد وجملة وشبه جملة.',tag:'احفظ'}
    ],
    examples:[
      {sentence:'حضرَ الطالبُ المجتهدُ.',answer:'المجتهدُ: نعت مرفوع وعلامة رفعه الضمة، وهو تابع للطالبُ.',note:'نعت حقيقي؛ لأن الوصف للطالب نفسه.'},
      {sentence:'رأيتُ طالبًا أخلاقُه عاليةٌ.',answer:'أخلاقُه عاليةٌ: جملة اسمية في محل نصب نعت.',note:'الرابط هو الضمير «الهاء» في أخلاقه.'}
    ],
    practice:[
      {q:'في «جاء الطالبُ المجتهدُ» ما إعراب «المجتهدُ»؟',a:['نعت مرفوع','بدل مرفوع','حال منصوب','توكيد مرفوع'],c:0,why:'لأنه يصف الطالب ويتبعه في الإعراب.'},
      {q:'أي صورة من صور النعت في «رأيت طالبًا أخلاقه عالية»؟',a:['مفرد','جملة اسمية','شبه جملة','بدل'],c:1,why:'الجملة الاسمية «أخلاقه عالية» جاءت وصفًا للطالب.'}
    ]
  },
  {
    id:'mutqarib', n:'02', title:'البحر المتقارب', type:'عروض', icon:'⌁',
    desc:'بحر شعري يدرسه الطالب من خلال التفعيلة الرئيسة والصور العروضية والتقطيع.',
    summary:'درس العروض لا يعتمد على الحفظ فقط: تعرّف التفعيلة الرئيسة، ثم تعلّم كيف تكتب عروضياً وتكتشف الوزن.',
    prosody:{main:'فعولن',forms:['فعولن','فعول','فعو','فَعِلُن'],pattern:'فعولن / فعولن / فعولن / فعولن // فعولن / فعولن / فعولن / فعولن'},
    sections:[
      {title:'ما هو علم العَروض؟',text:'هو العلم الذي يبحث في أوزان الشعر العربي، ويساعد على معرفة البحر وتقطيع البيت وتمييز الوزن الصحيح.',tag:'شرح'},
      {title:'مفتاح البحر المتقارب',text:'التفعيلة الرئيسة في البحر المتقارب هي «فعولن». ويعرض الدرس صورًا فرعية للتفعيلة بحسب موضعها في البيت.',tag:'قاعدة'},
      {title:'الوزن الأساسي',text:'الصورة التعليمية الأساسية: فعولن / فعولن / فعولن / فعولن // فعولن / فعولن / فعولن / فعولن. قد تتغير الصورة العروضية لبعض التفعيلات وفق الموضع والزحاف أو العلة التي يشرحها الدرس.',tag:'وزن'},
      {title:'العَروض والضرب والحشو',text:'العَروض هي التفعيلة الأخيرة من الشطر الأول، والضرب هو التفعيلة الأخيرة من الشطر الثاني، أما التفعيلات الأخرى فتسمى حشوًا.',tag:'مهم'},
      {title:'كيف أقطّع؟',text:'اقرأ البيت مضبوطًا، اكتبه كتابة عروضية حسب المنطوق، حدّد المقاطع الصوتية، ثم قابلها بالتفعيلات. لا تبدأ بتخمين البحر قبل تجربة الوزن.',tag:'طريقة الحل'},
      {title:'⭐ ما يجب حفظه',text:'اسم البحر، تفعيلته الرئيسة «فعولن»، مفهوم العَروض والضرب والحشو، والصور التي يحددها الدرس للتفعيلة.',tag:'احفظ'}
    ],
    examples:[
      {sentence:'فعولن | فعولن | فعولن | فعولن',answer:'هذه هي الصورة الأساسية التعليمية لتفعيلات البحر المتقارب.',note:'في التطبيق الفعلي قد تظهر صور عروضية فرعية للتفعيلات.'}
    ],
    practice:[
      {q:'ما التفعيلة الرئيسة للبحر المتقارب؟',a:['متفاعلن','فعولن','مستفعلن','فاعلاتن'],c:1,why:'التفعيلة الرئيسة للمتقارب هي فعولن.'},
      {q:'ما اسم التفعيلة الأخيرة من الشطر الأول؟',a:['الضرب','الحشو','العروض','السبب'],c:2,why:'التفعيلة الأخيرة من الشطر الأول تسمى العَروض.'}
    ]
  },
  {
    id:'tawkid', n:'03', title:'التوكيد', type:'قواعد', icon:'◎',
    desc:'تابع يقوّي المعنى ويثبته، وله نوعان أساسيان: لفظي ومعنوي.',
    summary:'تعلّم التوكيد اللفظي والمعنوي، ألفاظه، إعرابه، وكيف تفرّق بينه وبين بقية التوابع.',
    sections:[
      {title:'تعريف التوكيد',text:'التوكيد تابع يُذكر لتقوية المعنى وتثبيته ودفع احتمال الشك أو النسيان.',tag:'شرح'},
      {title:'التوكيد اللفظي',text:'يكون بتكرار اللفظ نفسه: اسمًا أو فعلًا أو حرفًا أو جملة. مثال: نجحَ الطالبُ الطالبُ. التكرار هنا للتقوية والتثبيت.',tag:'قاعدة'},
      {title:'التوكيد المعنوي',text:'يكون بألفاظ مخصوصة، منها: نفس، عين، كل، جميع، كلا، كلتا، ونحوها بحسب ما يورده المنهج. ويتصل بعضها بضمير يعود على المؤكَّد.',tag:'قاعدة'},
      {title:'الإعراب',text:'التوكيد يتبع المؤكَّد في الإعراب. تقول: حضرَ الطلابُ كلُّهم، ورأيتُ الطلابَ كلَّهم، ومررتُ بالطلابِ كلِّهم.',tag:'إعراب'},
      {title:'كلا وكلتا',text:'إذا استعملتا للتوكيد المعنوي مع المثنى فلهما أحكامهما الإعرابية بحسب موقعهما، وتلحق بهما الضمائر المناسبة في الاستعمال الصحيح.',tag:'مهم'},
      {title:'كيف أحل السؤال؟',text:'اسأل: هل يوجد تكرار للفظ؟ فهذا توكيد لفظي. إن لم يوجد، فابحث عن أحد ألفاظ التوكيد المعنوي، ثم حدّد المؤكَّد وموقع الكلمة إعرابيًا.',tag:'طريقة الحل'},
      {title:'⭐ ما يجب حفظه',text:'النوعان: لفظي ومعنوي، أشهر ألفاظ المعنوي، وأن التوكيد تابع للمؤكَّد في الإعراب.',tag:'احفظ'}
    ],
    examples:[
      {sentence:'عادَ اللاعبُ نفسُه.',answer:'نفسُه: توكيد معنوي مرفوع، وهو تابع للاعبُ في الإعراب.',note:'الهاء ضمير يعود على المؤكَّد.'},
      {sentence:'نجحَ محمدٌ محمدٌ.',answer:'محمدٌ الثانية: توكيد لفظي مرفوع.',note:'التوكيد اللفظي قائم على التكرار.'}
    ],
    practice:[
      {q:'أي جملة فيها توكيد لفظي؟',a:['حضرَ الطلابُ كلهم','نجحَ الطالبُ الطالبُ','رأيتُ الطالبَ نفسه','جاء كلا الطالبين'],c:1,why:'لأن الاسم «الطالب» تكرر للتوكيد.'},
      {q:'في «جاءَ القائدُ نفسُه» نوع التوكيد؟',a:['لفظي','معنوي','بدل','نعت'],c:1,why:'«نفسه» من ألفاظ التوكيد المعنوي.'}
    ]
  },
  {
    id:'kamil', n:'04', title:'البحر الكامل', type:'عروض', icon:'◌',
    desc:'بحر شعري تبرز فيه تفعيلة «متفاعلن» وتطبيقات التقطيع والصور العروضية.',
    summary:'ثبّت التفعيلة الأصلية، تعرّف الصور التي تظهر في التقطيع، وطبّق خطوات اكتشاف البحر.',
    prosody:{main:'متفاعلن',forms:['متفاعلن','متْفاعلن','متفعلن'],pattern:'متفاعلن / متفاعلن / متفاعلن // متفاعلن / متفاعلن / متفاعلن'},
    sections:[
      {title:'التفعيلة الرئيسة',text:'التفعيلة الأساسية للبحر الكامل هي «متفاعلن»، ويتكرر بناؤها في الصورة الأصلية للبحر.',tag:'قاعدة'},
      {title:'الوزن الأساسي',text:'الصورة الأصلية التعليمية: متفاعلن / متفاعلن / متفاعلن // متفاعلن / متفاعلن / متفاعلن.',tag:'وزن'},
      {title:'الصور العروضية',text:'قد تظهر التفعيلة في صور أخرى أثناء التقطيع، ويجب أن تدرس الصورة كما ترد في أمثلة المنهج لا أن تعتمد على التخمين.',tag:'مهم'},
      {title:'كيف أقطّع؟',text:'اكتب البيت عروضياً، قسّمه إلى مقاطع، ثم طابق كل مقطع مع متفاعلن أو صورتها الواردة في الدرس. بعد ذلك سمِّ البحر.',tag:'طريقة الحل'},
      {title:'⭐ ما يجب حفظه',text:'اسم البحر، التفعيلة الرئيسة «متفاعلن»، الصورة الأصلية للوزن، والصور العروضية التي يشرحها الكتاب.',tag:'احفظ'}
    ],
    examples:[
      {sentence:'متفاعلن | متفاعلن | متفاعلن',answer:'هذه الصورة تمثل تفعيلات الشطر في البناء الأصلي للبحر الكامل.',note:'في التقطيع قد تظهر صور فرعية للتفعيلة.'}
    ],
    practice:[
      {q:'ما التفعيلة الرئيسة للبحر الكامل؟',a:['فعولن','متفاعلن','فاعلن','مستفعلن'],c:1,why:'التفعيلة الرئيسة للكامل هي متفاعلن.'},
      {q:'ما الخطوة الأولى الأفضل قبل تسمية البحر؟',a:['تخمين الاسم','الكتابة العروضية والتقطيع','حذف نصف البيت','عدّ الكلمات فقط'],c:1,why:'تحديد الوزن يبدأ من التقطيع لا من التخمين.'}
    ]
  },
  {
    id:'badal', n:'05', title:'البدل', type:'قواعد', icon:'◇',
    desc:'تابع مقصود بالحكم، يأتي بعد اسم قبله يسمى المبدل منه.',
    summary:'فرّق بين البدل المطابق، وبدل البعض من الكل، وبدل الاشتمال، واعرف كيف تختبره في السؤال.',
    sections:[
      {title:'تعريف البدل',text:'البدل تابع يأتي بعد اسم قبله يسمى المبدل منه، ويكون البدل هو المقصود بالحكم في التركيب.',tag:'شرح'},
      {title:'البدل المطابق',text:'يكون البدل هو نفسه المبدل منه في المعنى. مثال: حضرَ صديقُك خالدٌ؛ خالد هو صديقك، وهو المقصود بالحضور.',tag:'نوع'},
      {title:'بدل البعض من الكل',text:'يدل على جزء حقيقي من المبدل منه، وغالبًا يشتمل على ضمير يعود عليه. مثال: قرأتُ الكتابَ نصفَه.',tag:'نوع'},
      {title:'بدل الاشتمال',text:'يدل على معنى أو شيء يشتمل عليه المبدل منه وليس جزءًا ماديًا منه. مثال: أعجبني الطالبُ أدبُه.',tag:'نوع'},
      {title:'الإعراب',text:'البدل يتبع المبدل منه في الإعراب. إذا كان المبدل منه مرفوعًا كان البدل مرفوعًا، وإذا كان منصوبًا أو مجرورًا تبعه في ذلك.',tag:'إعراب'},
      {title:'كيف أميّزه؟',text:'اسأل: هل الاسم الثاني هو المقصود بالحكم؟ ثم جرّب أن تستبدله بالأول. بعد ذلك حدّد العلاقة: نفس الشيء، جزء منه، أم معنى يشتمل عليه.',tag:'طريقة الحل'},
      {title:'⭐ ما يجب حفظه',text:'تعريف البدل، أنواعه الثلاثة الأساسية في الدرس، وتبعيته للمبدل منه في الإعراب.',tag:'احفظ'}
    ],
    examples:[
      {sentence:'حضرَ صديقُك خالدٌ.',answer:'خالدٌ: بدل مرفوع من صديقك.',note:'خالد هو نفسه الصديق المقصود بالحضور.'},
      {sentence:'قرأتُ الكتابَ نصفَه.',answer:'نصفه: بدل بعض من كل منصوب.',note:'النصف جزء حقيقي من الكتاب، والهاء تعود على المبدل منه.'}
    ],
    practice:[
      {q:'«أعجبني الطالبُ أدبُه» نوع البدل؟',a:['مطابق','بعض من كل','اشتمال','لفظي'],c:2,why:'الأدب معنى يشتمل عليه الطالب وليس جزءًا منه.'},
      {q:'البدل يتبع المبدل منه في ماذا؟',a:['المعنى فقط','الإعراب','عدد الكلمات','الزمن'],c:1,why:'البدل تابع له في الإعراب.'}
    ]
  },
  {
    id:'atf', n:'06', title:'العطف', type:'قواعد', icon:'↝',
    desc:'تابع يتوسط بينه وبين متبوعه حرف من حروف العطف.',
    summary:'تعرّف المعطوف والمعطوف عليه، واحفظ دلالة أشهر حروف العطف التي تحتاجها في الأسئلة.',
    sections:[
      {title:'تعريف العطف',text:'العطف تابع يتوسط بينه وبين متبوعه حرف من حروف العطف. الأول يسمى المعطوف عليه، والثاني المعطوف.',tag:'شرح'},
      {title:'الحكم الإعرابي',text:'المعطوف يتبع المعطوف عليه في الإعراب. مثال: حضرَ الطالبُ والمعلمُ؛ «المعلمُ» معطوف مرفوع.',tag:'قاعدة'},
      {title:'أشهر حروف العطف',text:'من الحروف التي ينبغي تمييزها: الواو، الفاء، ثم، أو، أم، بل، لكن، لا، حتى، ولكل حرف دلالته التي يحددها السياق.',tag:'حفظ'},
      {title:'الواو والفاء وثم',text:'الواو للجمع والمشاركة دون دلالة لازمة على الترتيب، والفاء تفيد الترتيب والتعقيب، وثم تفيد الترتيب مع التراخي.',tag:'مهم'},
      {title:'كيف أحل السؤال؟',text:'حدد حرف العطف، ثم حدّد المعطوف والمعطوف عليه، وبعدها اجعل إعراب المعطوف مثل إعراب المعطوف عليه.',tag:'طريقة الحل'},
      {title:'⭐ ما يجب حفظه',text:'تعريف العطف، عناصره الثلاثة، تبعية المعطوف، ودلالات أشهر الحروف المطلوبة في الدرس.',tag:'احفظ'}
    ],
    examples:[
      {sentence:'جاءَ الأبُ والابنُ.',answer:'الابنُ: معطوف مرفوع على الأب، والواو حرف عطف.',note:'المعطوف يتبع المعطوف عليه في الإعراب.'},
      {sentence:'دخلَ المعلمُ فجلسَ الطلابُ.',answer:'الفاء تفيد الترتيب والتعقيب في السياق.',note:'انتبه إلى دلالة الحرف، وليس إعرابه فقط.'}
    ],
    practice:[
      {q:'في «حضرَ الطالبُ والمعلمُ» ما إعراب «المعلم»؟',a:['معطوف مرفوع','بدل منصوب','نعت مجرور','حال مرفوع'],c:0,why:'المعلم معطوف على الطالب المرفوع.'},
      {q:'أي حرف يدل غالبًا على الترتيب مع التراخي؟',a:['الواو','الفاء','ثم','أو'],c:2,why:'ثم تفيد الترتيب مع التراخي.'}
    ]
  },
  {
    id:'review', n:'07', title:'مراجعة التوابع', type:'مراجعة', icon:'↻',
    desc:'مراجعة تجمع النعت والتوكيد والبدل والعطف في خريطة واحدة.',
    summary:'هنا تربط أبواب التوابع ببعضها بدل حفظ كل درس منفصلًا، مع أسئلة تمييز سريعة.',
    sections:[
      {title:'خريطة التوابع',text:'التوابع الأربعة في هذه الوحدة: النعت، التوكيد، البدل، العطف. كلها تتبع ما قبلها في الإعراب، لكن لكل واحد وظيفة وعلامة تمييز مختلفة.',tag:'خريطة'},
      {title:'كيف أفرّق بينها؟',text:'إذا كان الاسم الثاني يصف الأول فهو نعت. إذا كان يقوّي المعنى فهو توكيد. إذا كان هو المقصود بالحكم أو جزءًا منه أو مما يشتمل عليه فهو بدل. وإذا سبقه حرف عطف فهو عطف.',tag:'طريقة الحل'},
      {title:'مقارنة سريعة',text:'النعت = وصف. التوكيد = تقوية. البدل = المقصود بالحكم وعلاقة بدل. العطف = تابع بعد حرف عطف.',tag:'ملخص'},
      {title:'⭐ قبل الامتحان',text:'لا تعتمد على شكل الكلمة وحده. ابدأ من العلاقة بين التابع والمتبوع، ثم طبّق الإعراب.',tag:'احفظ'}
    ],
    examples:[
      {sentence:'جاءَ الطالبُ المجتهدُ نفسُه خالدٌ وأخوه.',answer:'المجتهد: نعت، نفسه: توكيد، خالد: بدل، أخوه: معطوف.',note:'الجملة تجمع الأنواع الأربعة للمراجعة.'}
    ],
    practice:[
      {q:'أي تابع وظيفته الأساسية الوصف؟',a:['النعت','التوكيد','البدل','العطف'],c:0,why:'النعت يصف متبوعه.'},
      {q:'أي تابع لا بد أن يسبقه حرف عطف؟',a:['النعت','التوكيد','البدل','العطف'],c:3,why:'العطف يكون بحرف عطف بين المعطوف عليه والمعطوف.'}
    ]
  },
  {
    id:'tamyiz', n:'08', title:'التمييز', type:'قواعد', icon:'◈',
    desc:'اسم نكرة يزيل إبهامًا في كلمة قبله أو في معنى جملة قبله.',
    summary:'ميّز بين تمييز الذات وتمييز الجملة، وافهم السؤال الذي يكشف لك التمييز بسرعة.',
    sections:[
      {title:'تعريف التمييز',text:'التمييز اسم نكرة يزيل إبهامًا في كلمة أو تركيب قبله، ويجعل المعنى أوضح.',tag:'شرح'},
      {title:'تمييز الذات',text:'يأتي ليوضح اسمًا مبهمًا قبله، ويظهر في تراكيب المقادير والمساحات والأوزان والكيل وبعض الأعداد بحسب السياق.',tag:'نوع'},
      {title:'تمييز الجملة',text:'يزيل إبهامًا ملحوظًا في معنى الجملة كلها. مثال: ازدادَ الطالبُ علمًا؛ «علمًا» أوضح جهة الزيادة.',tag:'نوع'},
      {title:'الإعراب',text:'التمييز في صوره المشهورة يأتي اسمًا نكرة، وكثير من أمثلته منصوب، لكن تحديد الإعراب النهائي يكون من تركيب الجملة والنوع الوارد في المنهج.',tag:'إعراب'},
      {title:'كيف أميّزه؟',text:'ابحث عن نكرة تزيل إبهامًا، واسأل: ماذا أقصد بهذا المقدار أو بهذا المعنى؟ إذا كان الاسم يفسر الإبهام فهو مرشح قوي ليكون تمييزًا.',tag:'طريقة الحل'},
      {title:'⭐ ما يجب حفظه',text:'تعريف التمييز، الفرق بين تمييز الذات وتمييز الجملة، والأمثلة التي يقررها الكتاب.',tag:'احفظ'}
    ],
    examples:[
      {sentence:'اشتريتُ كيلوغرامًا تفاحًا.',answer:'تفاحًا: تمييز يوضح المقصود بالكيلوغرام.',note:'وضح الاسم السابق المبهم من جهة النوع.'},
      {sentence:'ازدادَ الطالبُ علمًا.',answer:'علمًا: تمييز يوضح جهة الزيادة.',note:'هذا من تمييز الجملة.'}
    ],
    practice:[
      {q:'ما الوظيفة الأساسية للتمييز؟',a:['التوكيد','إزالة الإبهام','الوصف','العطف'],c:1,why:'التمييز يزيل إبهامًا في كلمة أو معنى.'},
      {q:'في «ازداد الطالب علمًا» نوع التمييز؟',a:['تمييز ذات','تمييز جملة','نعت','بدل'],c:1,why:'التمييز يوضح معنى الجملة كلها، فهو تمييز جملة.'}
    ]
  },
  {
    id:'adad', n:'09', title:'العدد', type:'قواعد', icon:'123',
    desc:'أحكام العدد والمعدود، مع التفريق بين مجموعات الأعداد والمطابقة والمخالفة.',
    summary:'العدد من أكثر الدروس التي تحتاج جدولًا: قسّم الأعداد إلى مجموعات، ثم طبّق حكم كل مجموعة.',
    numberTable:[
      ['١ و٢','يوافقان المعدود','مفرد','طالبٌ واحدٌ / طالبتان اثنتان'],
      ['٣–١٠','يخالف العدد المعدود في التذكير والتأنيث','جمع مجرور','ثلاثةُ طلابٍ / ثلاثُ طالباتٍ'],
      ['١١ و١٢','لها أحكام المطابقة الخاصة بها','مفرد منصوب','أحدَ عشرَ طالبًا / اثنتا عشرةَ طالبةً'],
      ['١٣–١٩','الجزء الأول يخالف، والثاني يوافق بحسب القاعدة','مفرد منصوب','ثلاثةَ عشرَ طالبًا / ثلاثَ عشرةَ طالبةً'],
      ['العقود ٢٠–٩٠','ألفاظ العقود ثابتة الصيغة','مفرد منصوب','عشرون طالبًا / عشرين طالبةً بحسب الموقع'],
      ['١٠٠ و١٠٠٠ ونحوهما','لها أحكام خاصة في التركيب','مفرد مجرور بعد المئة ونحوها في الاستعمال المعروف','مئةُ طالبٍ / ألفُ طالبٍ']
    ],
    sections:[
      {title:'فكرة الدرس',text:'أحكام العدد ليست قاعدة واحدة. لذلك اقسم الأعداد إلى مجموعات، ثم احفظ حكم العدد والمعدود في كل مجموعة.',tag:'خريطة'},
      {title:'١ و٢',text:'يوافق العدد المعدود في التذكير والتأنيث، ويأتي المعدود مفردًا في الاستعمال المباشر.',tag:'مجموعة'},
      {title:'٣ إلى ١٠',text:'يخالف العدد المعدود في التذكير والتأنيث، ويأتي المعدود جمعًا مجرورًا.',tag:'مجموعة'},
      {title:'١١ و١٢',text:'لهما أحكام خاصة في المطابقة، ويأتي المعدود مفردًا منصوبًا.',tag:'مجموعة'},
      {title:'١٣ إلى ١٩',text:'فيها تفصيل: الجزء الأول يخالف المعدود، والجزء الثاني يوافقه وفق القاعدة، والمعدود مفرد منصوب.',tag:'مجموعة'},
      {title:'العقود وما بعدها',text:'ألفاظ العقود مثل عشرين وثلاثين وأربعين لها أحكامها، ويأتي المعدود مفردًا منصوبًا. وتحتاج المئات والآلاف إلى حفظ تركيبها كما يرد في المنهج.',tag:'مجموعة'},
      {title:'كيف أحل السؤال؟',text:'حدّد العدد أولًا، ضعْه في مجموعته، حدّد جنس المعدود ومفرده أو جمعه، ثم طبّق المطابقة أو المخالفة، وأخيرًا راجع إعراب المعدود.',tag:'طريقة الحل'},
      {title:'⭐ ما يجب حفظه',text:'قسّم العدد إلى مجموعات بدل حفظ أمثلة منفصلة. أهم المجموعات: ١–٢، ٣–١٠، ١١–١٢، ١٣–١٩، العقود، والمئات والآلاف.',tag:'احفظ'}
    ],
    examples:[
      {sentence:'ثلاثةُ طلابٍ.',answer:'العدد «ثلاثة» خالف المعدود المذكر «طلاب»، والمعدود جمع مجرور.',note:'في المؤنث: ثلاثُ طالباتٍ.'},
      {sentence:'خمسةَ عشرَ طالبًا.',answer:'«خمسة عشر» من ١٣–١٩، والمعدود مفرد منصوب.',note:'الجزء الأول يخالف، والثاني يوافق.'}
    ],
    practice:[
      {q:'ما حكم العدد مع المعدود في ٣–١٠؟',a:['يوافقه','يخالفه','لا علاقة بينهما','يأتي المعدود مثنى'],c:1,why:'الأعداد من 3 إلى 10 تخالف المعدود في التذكير والتأنيث.'},
      {q:'ما صورة المعدود بعد ١١ و١٢؟',a:['جمع مجرور','مفرد منصوب','مثنى مرفوع','مفرد مجرور'],c:1,why:'يأتي المعدود مفردًا منصوبًا.'}
    ]
  }
];

const questions = lessons.flatMap(l => l.practice.map(p => ({...p, lesson:l.title}))).slice(0,12);
const grid = document.getElementById('lessonGrid');
const searchInput = document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');
const themeToggle = document.getElementById('themeToggle');
const progressEl = document.getElementById('readingProgress');
const heroProgress = document.getElementById('heroProgress');
const heroProgressText = document.getElementById('heroProgressText');

function getDone(){ return JSON.parse(localStorage.getItem('arabic11_done') || '[]'); }
function setDone(id){ const done=getDone(); if(!done.includes(id)){done.push(id);localStorage.setItem('arabic11_done',JSON.stringify(done));} renderLessons(searchInput.value); updateOverallProgress(); }
function escapeHTML(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}

function renderLessons(filter=''){
  const q=filter.trim().toLowerCase();
  const filtered=lessons.filter(x=>(x.title+' '+x.type+' '+x.desc+' '+x.summary).toLowerCase().includes(q));
  grid.innerHTML=filtered.map(x=>{
    const done=getDone().includes(x.id);
    return `<article class="lesson-card reveal visible" tabindex="0" data-id="${x.id}">
      <span class="lesson-number">${x.n} / 09</span><span class="lesson-icon">${x.icon}</span>
      <div><h3>${x.title}</h3><p>${x.desc}</p></div>
      <div><div class="lesson-meta"><span class="type-pill">${x.type}</span><span>${done?'تمت المراجعة ✓':'ابدأ الآن'}</span></div><div class="lesson-progress"><span style="width:${done?100:0}%"></span></div></div>
    </article>`;
  }).join('');
  emptyState.hidden=filtered.length!==0;
  grid.querySelectorAll('.lesson-card').forEach(card=>{
    card.addEventListener('click',()=>openLesson(card.dataset.id));
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ') {e.preventDefault();openLesson(card.dataset.id);}});
  });
}

function openLesson(id){
  const lesson=lessons.find(x=>x.id===id); if(!lesson)return;
  const old=document.getElementById('lessonModal'); if(old)old.remove();
  const done=getDone().includes(id);
  const modal=document.createElement('div'); modal.id='lessonModal';
  const tabs=['شرح الدرس','أمثلة','كيف أحل؟','ملخص','تدريب'];
  modal.innerHTML=`<div class="lesson-overlay"></div><div class="lesson-shell" role="dialog" aria-modal="true" aria-label="${escapeHTML(lesson.title)}">
    <aside class="lesson-sidebar"><button class="modal-close" aria-label="إغلاق">×</button><span class="eyebrow">${lesson.n} · ${lesson.type}</span><h2>${escapeHTML(lesson.title)}</h2><p>${escapeHTML(lesson.summary)}</p>
      <div class="lesson-side-nav">${tabs.map((t,i)=>`<button class="side-tab ${i===0?'active':''}" data-tab="${i}">${['◈','◇','✓','≡','?'][i]} ${t}</button>`).join('')}</div>
      <button class="primary-btn side-done" type="button">${done?'تمت المراجعة ✓':'إنهاء الدرس ✓'}</button>
    </aside>
    <main class="lesson-main"><div class="lesson-top"><div><span class="eyebrow">${lesson.type}</span><h3>${escapeHTML(lesson.title)}</h3></div><span class="lesson-counter">${lesson.n} / 09</span></div>
      <div class="tab-panel active" data-panel="0">${renderExplain(lesson)}</div>
      <div class="tab-panel" data-panel="1">${renderExamples(lesson)}</div>
      <div class="tab-panel" data-panel="2">${renderHowTo(lesson)}</div>
      <div class="tab-panel" data-panel="3">${renderSummary(lesson)}</div>
      <div class="tab-panel" data-panel="4">${renderPractice(lesson)}</div>
    </main>
  </div>`;
  document.body.appendChild(modal); document.body.classList.add('lesson-open');
  const close=()=>{modal.remove();document.body.classList.remove('lesson-open');};
  modal.querySelector('.modal-close').onclick=close; modal.querySelector('.lesson-overlay').onclick=close;
  modal.querySelectorAll('.side-tab').forEach(btn=>btn.onclick=()=>activateTab(modal,Number(btn.dataset.tab)));
  modal.querySelector('.side-done').onclick=()=>{setDone(id);modal.querySelector('.side-done').textContent='تمت المراجعة ✓';};
  modal.querySelectorAll('.practice-question').forEach((q)=>bindPractice(q));
  modal.querySelectorAll('.example-card').forEach(card=>card.addEventListener('click',()=>card.classList.toggle('open')));
  modal.querySelectorAll('.random-practice').forEach(btn=>btn.onclick=()=>shufflePractice(modal,lesson));
  if(lesson.prosody) bindProsody(modal,lesson);
  document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}}, {once:true});
}
function activateTab(modal,i){modal.querySelectorAll('.side-tab').forEach((b,j)=>b.classList.toggle('active',j===i));modal.querySelectorAll('.tab-panel').forEach((p,j)=>p.classList.toggle('active',j===i));modal.querySelector('.lesson-main').scrollTo({top:0,behavior:'smooth'});}
function renderExplain(l){
  let extra='';
  if(l.prosody) extra=`<div class="meter-card"><div><span class="mini-label">التفعيلة الرئيسة</span><strong>${l.prosody.main}</strong></div><div><span class="mini-label">الصورة الأساسية</span><code>${l.prosody.pattern}</code></div><div class="forms"><span>صور واردة:</span>${l.prosody.forms.map(x=>`<b>${x}</b>`).join('')}</div></div>`;
  if(l.numberTable) extra=`<div class="number-table-wrap"><table><thead><tr><th>المجموعة</th><th>الحكم</th><th>المعدود</th><th>مثال</th></tr></thead><tbody>${l.numberTable.map(r=>`<tr>${r.map(c=>`<td>${escapeHTML(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<div class="lesson-intro"><span class="section-badge">افهم أولًا</span><p>${escapeHTML(l.summary)}</p></div><div class="content-stack">${l.sections.map((s,i)=>`<article class="content-card ${s.tag==='احفظ'?'memorize':''}"><div class="content-index">${String(i+1).padStart(2,'0')}</div><div><span class="content-tag">${escapeHTML(s.tag)}</span><h4>${escapeHTML(s.title)}</h4><p>${escapeHTML(s.text)}</p></div></article>`).join('')}</div>${extra}`;
}
function renderExamples(l){return `<div class="panel-heading"><span class="section-badge">تطبيق</span><h4>أمثلة محلولة</h4><p>اضغط على المثال لعرض الحل والتعليق.</p></div><div class="examples-grid">${l.examples.map((e,i)=>`<article class="example-card"><div class="example-head"><span>مثال ${i+1}</span><span>اضغط للشرح</span></div><div class="sentence">${escapeHTML(e.sentence)}</div><div class="example-answer"><strong>الحل:</strong> ${escapeHTML(e.answer)}<small>${escapeHTML(e.note)}</small></div></article>`).join('')}</div>`;}
function renderHowTo(l){const isProsody=!!l.prosody;return `<div class="howto"><span class="section-badge">طريقة الحل</span><h4>${isProsody?'كيف أتعامل مع سؤال العَروض؟':'كيف أحل السؤال في الامتحان؟'}</h4><ol>${(isProsody?['اقرأ البيت قراءة سليمة.','اكتب الكلمات كتابة عروضية حسب النطق.','قسّم البيت إلى مقاطع صوتية.','طابق المقاطع مع التفعيلات.','حدّد العَروض والضرب والحشو عند الحاجة.','سمِّ البحر بعد التأكد من الوزن.']:['اقرأ الجملة كاملة ولا تحكم من كلمة واحدة.','حدّد العلاقة بين الكلمة وما قبلها.','استخرج العلامة المميزة للقاعدة.','حدّد الموقع الإعرابي.','اكتب الإعراب كاملًا مع علامة الإعراب إذا طُلب.','راجع القاعدة على المثال قبل اعتماد الإجابة.']).map((x,i)=>`<li><b>${i+1}</b><span>${x}</span></li>`).join('')}</ol></div>`;}
function renderSummary(l){return `<div class="summary-card"><span class="section-badge">ورقة الحفظ</span><h4>${escapeHTML(l.title)} في دقيقة</h4><ul>${l.sections.filter(s=>s.tag==='احفظ'||s.tag==='قاعدة'||s.tag==='مهم'||s.tag==='مجموعة'||s.tag==='وزن').slice(0,7).map(s=>`<li><span>✓</span>${escapeHTML(s.title)} — ${escapeHTML(s.text)}</li>`).join('')}</ul></div>`;}
function renderPractice(l){return `<div class="practice-head"><div><span class="section-badge">اختبر نفسك</span><h4>تدريب سريع على الدرس</h4></div><button class="ghost-btn random-practice" type="button">سؤال عشوائي ↻</button></div><div class="practice-list">${l.practice.map((p,i)=>`<div class="practice-question" data-index="${i}" data-answer="${p.c}"><div class="practice-q">${escapeHTML(p.q)}</div><div class="practice-options">${p.a.map((a,j)=>`<button type="button" data-choice="${j}">${escapeHTML(a)}</button>`).join('')}</div><div class="practice-feedback"></div></div>`).join('')}</div>`;}
function bindPractice(q){q.querySelectorAll('button').forEach(btn=>btn.onclick=()=>{if(q.dataset.locked)return;q.dataset.locked='1';const c=Number(btn.dataset.choice),ans=Number(q.dataset.answer);q.querySelectorAll('button').forEach((b,j)=>{if(j===ans)b.classList.add('correct');if(j===c&&c!==ans)b.classList.add('wrong');});q.querySelector('.practice-feedback').textContent=c===ans?'إجابة صحيحة ✓':'الإجابة الصحيحة مميزة بالأعلى — راجع الفكرة ثم جرّب مرة ثانية.';});}
function shufflePractice(modal,l){const p=l.practice[Math.floor(Math.random()*l.practice.length)];const wrap=modal.querySelector('.practice-list');wrap.innerHTML=renderPractice({...l,practice:[p]}).match(/<div class="practice-list">([\s\S]*)<\/div>$/)[1];const q=wrap.querySelector('.practice-question');if(q)bindPractice(q);}
function bindProsody(modal,l){const card=modal.querySelector('.meter-card');if(!card)return;card.querySelectorAll('.forms b').forEach(b=>b.addEventListener('click',()=>{card.querySelectorAll('.forms b').forEach(x=>x.classList.remove('chosen'));b.classList.add('chosen');card.querySelector('.mini-label').textContent='التفعيلة المختارة';card.querySelector('.meter-card strong').textContent=b.textContent;}));}

function updateOverallProgress(){const done=getDone().length,pct=Math.round(done/lessons.length*100);heroProgress.style.width=pct+'%';heroProgressText.textContent=pct?`أنجزت ${done} من ${lessons.length} دروس`:'ابدأ أول درس';}
searchInput.addEventListener('input',e=>renderLessons(e.target.value));
const savedTheme=localStorage.getItem('arabic11_theme');if(savedTheme==='dark')document.documentElement.dataset.theme='dark';themeToggle.textContent=savedTheme==='dark'?'☀':'☾';
themeToggle.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme==='dark';document.documentElement.dataset.theme=dark?'':'dark';localStorage.setItem('arabic11_theme',dark?'light':'dark');themeToggle.textContent=dark?'☾':'☀';});
window.addEventListener('scroll',()=>{const doc=document.documentElement,max=doc.scrollHeight-doc.clientHeight;progressEl.style.width=(max?doc.scrollTop/max*100:0)+'%';});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
let qi=0,answered=false;
function renderQuiz(){const box=document.getElementById('quizBox'),item=questions[qi];document.getElementById('reviewCount').textContent=`${qi+1} / ${questions.length}`;answered=false;box.innerHTML=`<span class="quiz-kicker">${escapeHTML(item.lesson)} · سؤال ${qi+1}</span><div class="quiz-question">${escapeHTML(item.q)}</div><div class="answers">${item.a.map((x,i)=>`<button class="answer" data-i="${i}" type="button">${escapeHTML(x)}</button>`).join('')}</div><div class="quiz-feedback"></div>`;box.querySelectorAll('.answer').forEach(btn=>btn.onclick=()=>{if(answered)return;answered=true;const i=Number(btn.dataset.i);box.querySelectorAll('.answer').forEach((b,j)=>{if(j===item.c)b.classList.add('correct');if(j===i&&i!==item.c)b.classList.add('wrong')});box.querySelector('.quiz-feedback').textContent=(i===item.c?'إجابة صحيحة ✓ ':'ليست الإجابة الصحيحة. ')+item.why;const next=document.createElement('button');next.className='quiz-next';next.textContent=qi===questions.length-1?'إعادة المراجعة':'السؤال التالي';next.onclick=()=>{qi=(qi+1)%questions.length;renderQuiz()};box.appendChild(next);});}
renderLessons();updateOverallProgress();renderQuiz();
