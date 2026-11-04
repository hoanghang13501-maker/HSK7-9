const VOCAB = [
["哀求","āiqiú","van nài, cầu xin"],["爱戴","àidài","kính yêu (người trên)"],["暧昧","àimèi","mập mờ"],
["安抚","ānfǔ","vỗ về, xoa dịu"],["傲慢","àomàn","kiêu ngạo"],["把关","bǎguān","kiểm soát chặt"],
["罢免","bàmiǎn","bãi nhiệm"],["颁布","bānbù","ban hành"],["包庇","bāobì","bao che"],
["包容","bāoróng","bao dung"],["饱和","bǎohé","bão hòa"],["报复","bàofù","trả thù"],
["抱负","bàofù","hoài bão"],["曝光","bàoguāng","phơi bày ra ánh sáng"],["卑鄙","bēibǐ","hèn hạ"],
["背叛","bèipàn","phản bội"],["崩溃","bēngkuì","sụp đổ"],["逼真","bīzhēn","sống động như thật"],
["弊端","bìduān","tệ hại, mặt hạn chế"],["鞭策","biāncè","đốc thúc"],["贬值","biǎnzhí","mất giá"],
["辨别","biànbié","phân biệt"],["变迁","biànqiān","đổi thay"],["表彰","biǎozhāng","tuyên dương"],
["濒临","bīnlín","kề sát, đứng trước bờ"],["秉承","bǐngchéng","kế thừa, tuân theo"],["并购","bìnggòu","sáp nhập và mua lại"],
["剥夺","bōduó","tước đoạt"],["波及","bōjí","lan tới"],["博弈","bóyì","đấu trí chiến lược"],
["不屑","búxiè","khinh thường"],["不懈","búxiè","không lơi lỏng"],["不乏","bùfá","không thiếu"],
["步伐","bùfá","bước chân, nhịp bước"],["部署","bùshǔ","bố trí, triển khai"],["裁决","cáijué","phán quyết"],
["草率","cǎoshuài","qua loa, cẩu thả"],["阐述","chǎnshù","trình bày, luận giải"],["倡导","chàngdǎo","đề xướng"],
["沉着","chénzhuó","bình tĩnh"],["憧憬","chōngjǐng","khát khao, mơ ước"],["初衷","chūzhōng","ý định ban đầu"],
["磋商","cuōshāng","thương lượng"],["奠定","diàndìng","đặt nền móng"],["遏制","èzhì","kiềm chế, ngăn chặn"],
["敷衍","fūyǎn","làm qua loa cho xong"],["汲取","jíqǔ","hấp thu, rút ra (bài học)"],["棘手","jíshǒu","hóc búa"],
["鉴于","jiànyú","xét thấy"],["弘扬","hóngyáng","phát huy, quảng bá"],["诠释","quánshì","diễn giải"],
["寄托","jìtuō","gửi gắm"],["旨在","zhǐzài","nhằm mục đích"],["渗透","shèntòu","thấm, thâm nhập"],
["融资","róngzī","huy động vốn"],["起诉","qǐsù","khởi kiện"],["诉讼","sùsòng","tố tụng"],
["芯片","xīnpiàn","chip"],["坐落","zuòluò","tọa lạc"],["一味","yíwèi","một mực"],
["商贾","shānggǔ","thương nhân"],["屹立","yìlì","sừng sững"],["蕴含","yùnhán","hàm chứa"],
["酝酿","yùnniàng","ấp ủ"],["熏陶","xūntáo","hun đúc"],["拯救","zhěngjiù","cứu vớt"],
["瑕疵","xiácī","tì vết"],["斟酌","zhēnzhuó","cân nhắc kỹ"],["执着","zhízhuó","kiên trì theo đuổi"],
["追溯","zhuīsù","truy nguyên"],["遵循","zūnxún","tuân theo"],["琢磨","zuómo","suy ngẫm"]
];

const IDIOM = [
["半途而废","bàntú'érfèi","bỏ dở giữa chừng"],["不言而喻","bùyán'éryù","không cần nói cũng hiểu"],
["层出不穷","céngchū-bùqióng","liên tiếp xuất hiện"],["持之以恒","chízhī-yǐhéng","kiên trì bền bỉ"],
["错综复杂","cuòzōng-fùzá","phức tạp đan xen"],["当务之急","dāngwùzhījí","việc cấp bách nhất"],
["翻天覆地","fāntiān-fùdì","long trời lở đất"],["废寝忘食","fèiqǐn-wàngshí","quên ăn quên ngủ"],
["根深蒂固","gēnshēn-dìgù","thâm căn cố đế"],["举足轻重","jǔzú-qīngzhòng","giữ vai trò then chốt"],
["潜移默化","qiányí-mòhuà","ảnh hưởng ngấm ngầm"],["锲而不舍","qiè'érbùshě","kiên trì không bỏ cuộc"],
["夸夸其谈","kuākuā-qítán","ba hoa, nói suông"],["画蛇添足","huàshé-tiānzú","vẽ rắn thêm chân"],
["刻舟求剑","kèzhōu-qiújiàn","khắc thuyền tìm gươm"],["守株待兔","shǒuzhū-dàitù","ôm cây đợi thỏ"],
["亡羊补牢","wángyáng-bǔláo","mất bò mới lo làm chuồng"],["井底之蛙","jǐngdǐzhīwā","ếch ngồi đáy giếng"],
["对牛弹琴","duìniú-tánqín","đàn gảy tai trâu"],["一针见血","yìzhēn-jiànxiě","nói trúng tim đen"],
["举一反三","jǔyī-fǎnsān","học một biết mười"],["络绎不绝","luòyì-bùjué","nườm nượp không dứt"],
["源远流长","yuányuǎn-liúcháng","lâu đời"],["博大精深","bódà-jīngshēn","rộng lớn và sâu sắc"],
["脱颖而出","tuōyǐng'érchū","nổi bật lên"],["与时俱进","yǔshí-jùjìn","tiến cùng thời đại"],
["因地制宜","yīndì-zhìyí","tùy nơi mà làm cho phù hợp"],["循序渐进","xúnxù-jiànjìn","tuần tự tiến dần"],
["揠苗助长","yàmiáo-zhùzhǎng","nóng vội đốt cháy giai đoạn"],["南辕北辙","nányuán-běizhé","làm ngược mục đích"],
["迫不及待","pòbùjídài","nóng lòng không đợi được"],["众所周知","zhòngsuǒzhōuzhī","ai cũng biết"],
["因人而异","yīnrén'éryì","tùy người mà khác"],["万变不离其宗","wànbiàn bù lí qí zōng","thay đổi mấy cũng không rời gốc"]
];

const FILL = [
{q:"他做事从不___，每个细节都要反复确认。",o:["草率","仓促","潦草","粗略"],e:"草率 = qua loa (thái độ). 仓促 = vội về thời gian; 潦草 dùng cho chữ viết; 粗略 = sơ lược."},
{q:"面对突如其来的变故，她依然十分___。",o:["沉着","沉闷","沉迷","沉淀"],e:"沉着 = bình tĩnh. 沉闷 = ngột ngạt; 沉迷 = mê đắm; 沉淀 = lắng đọng."},
{q:"这项政策___保护中小企业的合法权益。",o:["旨在","致使","鉴于","基于"],e:"旨在 + mục đích. 致使 = dẫn đến; 鉴于/基于 = căn cứ vào."},
{q:"___天气恶劣，比赛被迫延期。",o:["鉴于","以致","何况","况且"],e:"鉴于 + lý do, đứng đầu câu. 以致 dẫn ra kết quả ở vế sau."},
{q:"他平时不努力，___考试没及格。",o:["以致","鉴于","固然","倘若"],e:"以致 dẫn ra kết quả (thường xấu)."},
{q:"这首诗___了作者对故乡的深切思念。",o:["寄托","委托","托付","拜托"],e:"寄托 + tình cảm/hy vọng. 委托/托付/拜托 = nhờ vả, giao việc."},
{q:"他年纪轻轻，便胸怀远大的___。",o:["抱负","报复","报答","报酬"],e:"抱负 (danh) = hoài bão; 报复 (động) = trả thù, cùng đọc bàofù."},
{q:"参加这次比赛的选手中___世界级高手。",o:["不乏","步伐","不妨","不免"],e:"不乏 = không thiếu; 步伐 = bước chân; 不妨 = cứ thử; 不免 = khó tránh."},
{q:"我们要___历史教训，避免重蹈覆辙。",o:["汲取","索取","谋取","窃取"],e:"汲取 + 经验/教训."},
{q:"这个问题非常___，需要专家出面处理。",o:["棘手","拿手","顺手","随手"],e:"棘手 = hóc búa. 拿手 = sở trường."},
{q:"公司的商业机密被员工___给了竞争对手。",o:["泄露","泄气","宣泄","发泄"],e:"泄露 + bí mật. 泄气 = nản; 宣泄/发泄 = trút cảm xúc."},
{q:"合同到期后，双方的合作关系自动___。",o:["终止","中止","停顿","停滞"],e:"终止 = chấm dứt hẳn; 中止 = tạm dừng giữa chừng."},
{q:"双方经过多轮___，终于达成了共识。",o:["磋商","商贩","商机","商用"],e:"磋商 (động từ) = thương lượng."},
{q:"他___拒绝了对方的无理要求。",o:["断然","偶然","必然","茫然"],e:"断然 = dứt khoát."},
{q:"这一重大发现为后续研究___了坚实的基础。",o:["奠定","决定","确定","鉴定"],e:"奠定 + 基础 là cụm cố định."},
{q:"政府迅速采取措施，___疫情进一步蔓延。",o:["遏制","节制","抑郁","压抑"],e:"遏制 + 蔓延/势头."},
{q:"这部作品看似简单，却___着深刻的哲理。",o:["蕴含","含糊","含蓄","涵盖"],e:"蕴含 + 哲理/意义. 涵盖 = bao quát phạm vi."},
{q:"新的改革方案还在___之中，暂时不便公开。",o:["酝酿","酿造","沉淀","孕育"],e:"酝酿 = ấp ủ kế hoạch."},
{q:"我们___地想要知道接下来会发生什么。",o:["迫不及待","迫在眉睫","当务之急","千钧一发"],e:"迫不及待 = nóng lòng (tả người). 迫在眉睫 = việc cấp bách (tả sự việc)."},
{q:"人体抵抗力下降，各种病菌容易___。",o:["乘虚而入","浑水摸鱼","坐失良机","无机可乘"],e:"乘虚而入 = thừa lúc yếu mà xâm nhập."}
];

const READ = [
{src:"Câu 41",q:"空白处最适合填入的词语是：",ctx:"警惕深度伪造技术，并不等同于在面对它带来的潜在风险时，____禁止它的应用……",o:["一味","向来","再度","偏偏"],e:"一味禁止 = một mực cấm đoán."},
{src:"Câu 42",q:"伪造视频是怎样做到与真人一模一样的？",ctx:"……它的出现使得篡改或生成高度逼真且难以甄别的音视频内容成为可能。",o:["篡改图像或声音","复制指纹","盗取虹膜信息","整容或行为模仿"],e:"Bài nói rõ là 篡改 hình ảnh, âm thanh."},
{src:"Câu 43",q:"第二段中没有提到深度伪造技术的：",ctx:"Đoạn 2 nêu khái niệm, các loại (AI换脸、语音模拟、视频生成). “起初仅限于学术研究” nằm ở đoạn 3.",o:["起源","概念","种类","应用"],e:"Khởi nguồn ở đoạn 3 (đáp án tự giải, C/D có thể tranh luận)."},
{src:"Câu 44",q:"根据第三段，可以知道：",ctx:"深度伪造技术起初仅限于学术研究，后来广泛应用于多个现实场景……",o:["深度伪造技术一开始只用于学术研究","影视制作中语音模拟非常普遍","零售商会为消费者设计个人专属肖像","虚拟历史人物逐渐融入普通百姓的日常生活"],e:"起初仅限于 = 一开始只用于."},
{src:"Câu 45",q:"下列哪项属于深度伪造技术被滥用的后果？",ctx:"这种技术一旦被滥用，则可能给国家安全甚至世界秩序带来新的风险。",o:["威胁国家安全及世界秩序","阻碍科技进步","导致企业管理分工不明","大众对身边的人失去信任"],e:"Gần như nguyên văn."},
{src:"Câu 48",q:"空白处最适合填入的词语是：",ctx:"藏书楼____在宁波市区月湖西面……",o:["坐落","贯穿","放置","定居"],e:"坐落 dùng cho công trình."},
{src:"Câu 49",q:"范钦能搜集到大量书籍，得益于什么？",ctx:"范钦曾在湖北、江西……等地做过二十多年地方官……这使他有机缘广收书籍。",o:["曾在多省为官","印刷术的普及","在朝时广交权臣","其家族财力雄厚"],e:"Làm quan nhiều nơi."},
{src:"Câu 51",q:"下列哪项不属于范钦书楼防火的措施？\n①楼两侧建造封火墙 ②楼前建造一个蓄水池 ③大门上绘制水纹图案 ④书楼各层存放灭火工具",ctx:"……在东西两侧筑起封火墙，楼下中厅上面的阁栅上还绘有许多水纹作装饰图案。",o:["③④","①④","①②","②③"],e:"Hoa văn vẽ ở 阁栅, không phải cổng; bài không nhắc dụng cụ chữa cháy."},
{src:"Câu 52",q:"“未罹火患”的“罹”跟哪个括号中的词意思相近？",ctx:"……天一阁自建成到今天的几百年间未罹火患。",o:["（遭）逢巨变","讳疾（忌）医","破财（免）灾","灰飞烟（灭）"],e:"罹 = 遭."},
{src:"Câu 53",q:"举宁波太守的例子，是为了说明什么？",ctx:"家规亦是阁规，对家人如是，对外人亦如是。据说光绪年间宁波太守……也不能逾越“火不入阁”之规。",o:["天一阁阁规对外人同样适用","天一阁令天下读书人心向往之","天一阁巨大的藏书规模吸引了众多官员","天一阁为以防万一至今拒绝安装电话和电线"],e:"对外人亦如是."},
{src:"Câu 55",q:"空白处最适合填入的词语是：",ctx:"从安全角度看，海上发射能避免____麻烦。",o:["诸多","详尽","可观","巨额"],e:"诸多 + danh từ."},
{src:"Câu 57",q:"为什么赤道地带是航天发射的理想地点？",ctx:"……火箭从那里起飞，会获得一个沿螺旋线路径飞行的速度……",o:["能利用地球自转获得沿螺旋线路径飞行的速度","可以延长卫星运行的寿命","最易受到太阳引力的牵引","炎热的气候有助于提升火箭推力"],e:"Tận dụng tốc độ tự quay của Trái Đất."},
{src:"Câu 58",q:"下列哪项不是海上发射的优势？",ctx:"对发射平台而言，则需要承载吨位大、稳定性好……的船舶。",o:["承载吨位大，稳定性好","可执行重大防卫任务","无需大面积疏散人员","节省推进剂，降低成本"],e:"Đây là yêu cầu với con tàu, không phải ưu thế."},
{src:"Câu 59",q:"相比液体燃料火箭，固体燃料火箭：",ctx:"……十分省事，但运载能力比不上液体燃料火箭。",o:["运载能力相对较弱","装药费时费力","需用高压气体点火","可提前测出火箭的瞄准点"],e:"比不上 = kém hơn."},
{src:"Câu 60",q:"“难啃的‘硬骨头’”在文中表示什么意思？",ctx:"……这些都是难啃的“硬骨头”。",o:["指不易攻克的问题","形容船体坚硬","表示坚强不屈","比喻食物难以下咽"],e:"Ẩn dụ: vấn đề khó giải quyết."}
];

const PARA = [
{k:"A",t:"A 从鲸鱼死亡下沉到鲸尸消失，整个过程可以分为四个阶段……海豚不会经历与鲸落相同的生态演变阶段。"},
{k:"B",t:"B 鲸鱼死后体内产生甲烷气体，尸体膨胀爆炸，被称为“鲸爆”……几乎都是搁浅在岸上的鲸鱼导致的。"},
{k:"C",t:"C 此后，鲸骨中的“生命养分”虽消失殆尽……就会进入生态演变的“礁石阶段”。"},
{k:"D",t:"D 如果说海底是一片没有阳光关爱的荒漠，那么“鲸落”便是深海的生命之泉……何为鲸落？……"},
{k:"F",t:"F 从鲸尸开始下坠的时候，鲸落最初的阶段便开始了，这个阶段被称作“移动的清道夫”……"},
{k:"G",t:"G 经过了持续时间长达4~5年的第二阶段后……在鲸落进入第三阶段时……“化能自养阶段”……"}
];
const FIXED_E = "E 当第一场“盛大的宴会”结束后……“致富机会主义者阶段”（đã cố định ở vị trí 4）";
const ORDER_ANS = "DAFGC";

const ORDQ = [
{src:"62–66 (a)",q:"Đoạn nào là đoạn gây nhiễu?",ctx:"Chủ đề: 鲸落 – xác cá voi chìm xuống biển sâu tạo hệ sinh thái.",o:["B（鲸爆）","A","C","G"],e:"B nói về xác cá voi phát nổ trên bờ."},
{src:"62–66 (b)",q:"Đoạn nào là đoạn mở bài?",ctx:"Mẹo: tìm đoạn nêu khái niệm.",o:["D","A","F","B"],e:"D có “何为鲸落？”."},
{src:"62–66 (c)",q:"Đoạn nào đứng ngay sau E (giai đoạn 2)?",ctx:"E = “致富机会主义者阶段”.",o:["G","C","F","A"],e:"G mở đầu “经过了……第二阶段后”."},
{src:"62–66 (d)",q:"Đoạn nào là đoạn kết?",ctx:"Mẹo: tìm từ nối 此后.",o:["C","G","A","D"],e:"C: “此后……礁石阶段”."}
];

const SHORT = [
{src:"Câu 67",q:"客家人是从哪里搬迁到闽西地区的？",ctx:"客家人原是居住在黄河中下游的汉族人……",alts:[["黄河中下游"]],show:"黄河中下游"},
{src:"Câu 68",q:"客家人在哪些方面保留着以前的文化特点？",ctx:"……但语言、风俗却保持着纯正的中原遗风……",alts:[["语言","风俗"]],show:"语言、风俗"},
{src:"Câu 70",q:"第三段的主要内容是什么？",ctx:"圆形土楼是客家民居的典范……圆楼一般为两圈或三圈……",alts:[["圆","结构"],["圆楼"]],show:"圆形土楼的结构"},
{src:"Câu 71",q:"土楼一二层对外不开窗说明土楼具有怎样的优势？",ctx:"土楼的防卫性极强，一二层对外不开窗……",alts:[["防卫"]],show:"防卫性极强"},
{src:"Câu 74",q:"为什么鸡脚棉无法用于纺织细布？",ctx:"由于棉绒短，织不了细布……",alts:[["棉绒短"]],show:"棉绒短"},
{src:"Câu 75",q:"明代以前，南通的经济支柱是什么？",ctx:"……明代以前，当地的经济支柱本是盐业。",alts:[["盐业"]],show:"盐业"},
{src:"Câu 76",q:"在清代，相比江南其他的优质棉种，鸡脚棉有什么优势？",ctx:"……它的出棉率比彼时江南其他的优质棉种更高。",alts:[["出棉率"]],show:"出棉率更高"},
{src:"Câu 77",q:"“商贾云集”的意思是什么？",ctx:"每年秋天，南通商贾云集……",alts:[["商人","聚集"],["商人","云集"],["商人","汇集"]],show:"商人聚集"},
{src:"Câu 78",q:"张謇耗时多久建成了中国第一家民营纺织企业？",ctx:"……历时44个月，于1899年建成……",alts:[["44个月"],["四十四个月"]],show:"44个月"},
{src:"Câu 79",q:"纺织染传习所的创办标志着什么的诞生？",ctx:"……开启了中国纺织高等教育的先河。",alts:[["纺织高等教育"]],show:"中国纺织高等教育"},
{src:"Câu 80",q:"请在空白处填入一个恰当的词语。",ctx:"“枢机之发动乎天地，衣被所及遍我东南”——这是……翁同龢特地派小船送来的一副____。",alts:[["对联"]],show:"对联",e:"Lượng từ 副 + câu hai vế đối nhau → 对联."}
];

const TASK = [
{src:"Câu 82",time:10,q:"Lập dàn ý và viết đoạn mở bài (≥150 chữ).",ctx:"“己所不欲，勿施于人。”你是否赞同？请写一篇不少于600字的文章，论证你的观点。",tips:"开头亮观点 → 论点一+例子 → 论点二+例子 → 诚然……但是…… → 综上所述……\nChèn: 不言而喻、潜移默化、举足轻重"},
{src:"Câu 83",time:15,q:"Dịch viết sang tiếng Trung.",ctx:"My family has “three manys”: many stools, many photos, and many family letters. There are many stools because my family is very hospitable and prepares resting places for guests in advance. There are many photos because since my grandmother's generation, my family has loved beauty very much and has especially loved to show beauty, so showing photos is a famous dish for when my family entertains guests. There are many family letters because members of my grandfather and grandmother's family often travelled far and settled down in different places. In the past, when communication was underdeveloped, they had no choice but to use pens instead of mouths to express their longing for their relatives.",tips:"好客、歇脚、爱美、晒照片、待客、远走他乡、落地生根、以笔代口、思念",ref:"我家有“三多”：凳子多、照片多、家书多。凳子多，是因为我家人十分好客，总会提前为客人备好歇脚的地方。照片多，是因为从外婆那一辈起，我家人就特别爱美，尤其爱“秀”美，所以“晒照片”成了我家待客的一道“名菜”。家书多，是因为爷爷奶奶家的成员常常远走他乡，在不同的地方落地生根。过去通讯不发达，他们只好以笔代口，抒发对亲人的思念。"},
{src:"Câu 85",time:2,q:"Dịch nói trong 2 phút (nên tự ghi âm).",ctx:"According to a survey, in 2020, more than 30% of adult readers in China had the habit of listening to books. The scale of audio reading continues to expand, and audio reading has already become a new reading “trend”. To some extent, audio reading not only frees the hands, but also frees the eyes. High-quality sound and rich emotions not only enhance users' understanding of the content, but also meet people's need for instant reading and fragmented reading. However, at present, audio reading has some problems, such as uneven content quality, and needs to be further standardised and improved.",tips:"听书、有声阅读、潮流、解放双手/双眼、即时阅读、碎片化阅读、良莠不齐、规范和完善",ref:"据调查，2020年中国超过30%的成年读者有听书的习惯。有声阅读规模持续扩大，已经成为一种新的阅读“潮流”。在某种程度上，有声阅读不仅解放了双手，也解放了双眼。优质的声音和丰富的情感不仅加深了用户对内容的理解，也满足了人们即时阅读、碎片化阅读的需求。不过，目前有声阅读还存在内容质量良莠不齐等问题，有待进一步规范和完善。"},
{src:"Câu 86",time:2,q:"Dịch nói trong 2 phút.",ctx:"The “Silk Road”, for a very long historical period, has been a bridge for friendly exchanges between Chinese people and the people of Central Asia, West Asia, Europe, and other countries. Through this trade route, Chinese silk products, porcelain, tea, and other handicrafts have continuously spread to West Asia and Europe; the commodities, technologies, and cultures of these countries have also been introduced eastward to China through the Silk Road. The Silk Road links Eurasia together and greatly promotes the exchange and development of civilizations.",tips:"友好交往的桥梁、商路、丝绸制品、瓷器、源源不断、东传、连接欧亚大陆",ref:"在很长的历史时期内，“丝绸之路”一直是中国人民与中亚、西亚、欧洲等国家人民友好交往的桥梁。通过这条商路，中国的丝绸制品、瓷器、茶叶等手工艺品源源不断地传到西亚和欧洲；这些国家的商品、技术和文化也经由丝绸之路东传至中国。丝绸之路把欧亚大陆连接在一起，极大地促进了文明的交流与发展。"},
{src:"BN1 – Câu 90",time:15,q:"Dịch viết sang tiếng Trung.",ctx:"Debates on artificial intelligence typically tend to focus on its potential harms, such as potential risks to data security, massive job destruction, and even human extinction as mentioned by some. However, others are focusing on the potential rewards. AI could, they claim, help humanity solve some of its biggest and thorniest problems. And, they say, AI will do this in a very specific way: by radically accelerating the pace of scientific discovery, especially in areas such as medicine, climate science and green technology. Luminaries in the field believe that AI can turbocharge scientific progress and lead to a golden age of discovery.",tips:"潜在危害、数据安全隐患、棘手、加快步伐、黄金时代",ref:"有关人工智能的辩论通常倾向于关注它的潜在危害，如数据安全隐患、大量工作岗位被摧毁，甚至还有一些人提到的人类灭绝。不过，有些人关注的则是其潜在的回报。他们称人工智能可以帮助人类解决一些最大、最棘手的问题。他们还说，人工智能将以一种非常独特的方式做到这一点：大幅度加快科学发现的步伐，尤其是在医学、气候科学，以及绿色技术等领域。这些领域的杰出人物认为，人工智能可以大大推动科研进步，并开启科学发现的黄金时代。"},
{src:"BN5 – Câu 90",time:15,q:"Dịch viết sang tiếng Trung.",ctx:"The Great Wall is a monument in the history of ancient Chinese engineering. It was the pooling of the masons' hard work and wisdom that resulted in the boldness and grandeur of the “ten-thousand-mile Great Wall”. The “ten-thousand-mile Great Wall” is a crystallization of the wisdom of the Chinese people, and a portrait of the diligence of the Chinese race. The building of the Great Wall originated from the military threat from the north; it was a defensive measure. It is thus a symbol of the Chinese people's being “prepared for danger in times of peace”.",tips:"丰碑、能工巧匠、雄伟壮丽、结晶、写照、防御、居安思危",ref:"长城是中国古代工程史上的一座丰碑。能工巧匠们的辛勤汗水与卓越智慧，成就了“万里长城”的雄伟壮丽。“万里长城”是中国人民智慧的结晶，也是中华民族勤劳品质的写照。长城的修筑，直接动因是应对北方的军事威胁，属于一种防御手段。所以，长城也是中国人“居安思危”的象征。"},
{src:"Câu 87",time:3,q:"Nói 3 phút: giới thiệu lịch trình, lưu ý và động viên các bác sĩ tình nguyện.",ctx:"3/1–3/2 同心县：医疗服务需求调研；学术交流会\n3/3–3/4 彭阳县：义诊\n3/5–3/6 隆德县：社区健康讲座\n注意：按时到岗；熟悉诊室位置；提高安全意识；遵守规定\n补充：交通费及食宿费可报销；行前购买保险",tips:"问候 → 行程 → 注意事项 → 补充说明 → 鼓励",ref:"各位医师志愿者，大家好！我是本次活动的负责人，下面向大家介绍一下活动安排。3月1日到2日，我们在同心县开展医疗服务需求调研，并举办学术交流会；3月3日到4日，在彭阳县进行义诊；3月5日到6日，在隆德县开展社区健康讲座。另外请大家注意：第一，按时到岗；第二，提前熟悉各诊室位置和就诊时间；第三，提高安全意识；第四，遵守医院的相关规定。交通费和食宿费都可以报销，出发前我们会为每位志愿者购买保险。最后，希望大家齐心协力，为当地群众送去健康和温暖！"},
{src:"Câu 91 (đề tự đặt)",time:3,q:"Nói 3 phút trình bày quan điểm.",ctx:"你认为“碎片化阅读”利大于弊，还是弊大于利？",tips:"我认为…… → 理由一 → 理由二 → 举个例子 → 总之……"},
{src:"Ôn từ",time:10,q:"Chọn 5 từ hay sai nhất trong Sổ câu sai và viết 5 câu, mỗi câu dùng 1 từ.",ctx:"Mỗi câu ≥15 chữ, đúng kết hợp từ.",tips:"Ví dụ: 我们应当汲取历史教训，避免重蹈覆辙。"}
];
