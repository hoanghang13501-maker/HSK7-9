/* ===== data5.js – CẬP NHẬT THEO ĐÁP ÁN CHÍNH THỨC BẮC ĐẠI + NGHE/DỊCH/NÓI ===== */

/* ---------- 1. Sửa đáp án sắp xếp đoạn 69–73 ---------- */
SETS[6].order  = {ans:"FACGD", note:"đoạn B cố định ở vị trí 2", full:"F → (B) → A → C → G → D · đoạn nhiễu: E"};
SETS[9].order  = {ans:"DBACE", note:"đoạn F cố định ở vị trí 5", full:"D → B → A → C → (F) → E · đoạn nhiễu: G"};
SETS[10].order = {ans:"BFAGD", note:"đoạn C cố định ở vị trí 2", full:"B → (C) → F → A → G → D · đoạn nhiễu: E"};

/* ---------- 2. Sửa trả lời ngắn theo đáp án chính thức ---------- */
function fixShort(set, n, show, kw){
  SETS[set].short.forEach(g => g.q.forEach(r => { if (r[0] === n) { r[3] = show; r[4] = kw; } }));
}
fixShort(6, 74, "传报信息", [["信息"],["传报"],["敌情"],["报警"]]);
fixShort(7, 75, "势力相等", [["相等"],["平等"],["相当"],["平起平坐"],["对抗"]]);
fixShort(7, 83, "大禹的妻子/女娇", [["女娇"],["妻子"],["涂山"]]);
fixShort(9, 74, "宜宾酿酒历史悠久", [["酿酒","悠久"],["酿酒历史"],["唐","酒"],["盛行酿酒"]]);
fixShort(9, 80, "从古使用至今", [["至今"],["连续使用"],["从未间断"],["六百多年"],["600"]]);
fixShort(10, 86, "庄稼/土豆和玉米", [["庄稼"],["土豆"],["玉米"],["植物"]]);
fixShort(10, 87, "有突出的成绩或效果", [["突出"],["成绩"],["效果"],["显著"],["成效"],["明显"],["成果"]]);

/* Bỏ ghi chú “tự giải” ở 2 câu đã được xác nhận */
function fixCtx(set, n, ctx){
  SETS[set].read.forEach(g => g.q.forEach(r => { if (r[0] === n) r[2] = ctx; }));
}
fixCtx(6, 67, "防水的细毛使蚊子能够迅速摆脱雨滴重新飞起。");
fixCtx(9, 65, "它的建筑艺术体现了“地不平我身平”的哲学思想。（出淤泥而不染 = 不受环境影响）");

/* Đổi tên bộ cho rõ */
[6,7,8,9,10].forEach((s,i) => SETS[s].name = "Bắc Đại " + (i+1));

/* Câu 89 Bắc Đại: đã có bài mẫu */
TASK.forEach(t => { if (/^BĐ\d – Câu 89$/.test(t.src)) t.tips = t.tips.replace("(Đề Bắc Đại không có bài mẫu – tự chấm theo dàn ý)", "Viết xong, đối chiếu bài mẫu câu 89 trong file đáp án Bắc Đại."); });

/* ---------- 3. NGHE BẮC ĐẠI câu 1–10 ---------- */
LISTEN.push(
{src:"BĐ1 · Nghe 1–5", audio:"有一条南北走向的山谷，它的西坡长满松、柏、柘、女贞等杂树，而东坡却只有雪松。1983年的冬天，大雪纷飞，有两个旅行者来到了这个山谷。他们惊奇地发现，由于特殊的风向，山谷东坡的雪总比西坡的雪来得大。当雪积到一定程度时，雪松那富有弹性的枝丫就开始向下弯曲，于是积雪便从枝丫上滑落，刚弯下去的树枝又立即反弹回来。谜底终于被揭开了：东坡雪大，因为其他的树没有雪松这个本领，树枝都被积雪压断了；西坡雪小，树上少量的积雪根本就压不断树枝。一位旅行者说：对于外界的压力，可以通过正面抗争去战胜它，但有时也需要像雪松那样先弯曲一下，做出适当的让步，以求反弹的机会。",
 q:[[1,"这条山谷里只生长着松树和柏树。",false],
    [2,"风向导致了山谷东坡和西坡的雪量不一样大。",true],
    [3,"雪松树枝的弹性更大。",true],
    [4,"西坡树上的积雪常常压断树枝。",false],
    [5,"这篇文章想告诉我们适当弯曲能够更好地发展自己。",true]]},
{src:"BĐ1 · Nghe 6–10", audio:"在中国传统观念里，燕窝被认为是滋补圣品。燕窝的蛋白质含量看上去不低，却敌不过常见的豆腐皮。有人会说，许多明星都说护肤养颜的秘诀是吃燕窝。但是，影视、广告中的明星们，他们肌肤所呈现的状态多是靠化妆和影视后期加工，而非依赖吃燕窝之类的食品。能消费得起燕窝的人，必然用得起各类护肤品和化妆品，面对阳光暴晒的概率也会更低，而阳光中的紫外线是导致皮肤老化的主要原因之一。更重要的是，由心理上的认同感带来的安慰剂效应，让吃燕窝的人坚信自己皮肤光洁有弹性，这才是燕窝真正的功效。燕窝的售卖者还会提供繁复多样的信息，这样的知识体系让吃燕窝的人笃信自己的选择，并加重对燕窝的迷信和膜拜。",
 q:[[6,"燕窝中的蛋白质含量高于豆腐皮。",false],
    [7,"影视、广告中，明星们的肌肤呈现光泽的原因是靠吃滋补食品。",false],
    [8,"吃燕窝可以预防皮肤老化。",false],
    [9,"燕窝的真正功效在于它的心理作用。",true],
    [10,"商家提供的系统的燕窝知识是为了加深消费者对燕窝的喜爱和迷恋。",true]]},
{src:"BĐ2 · Nghe 1–5", audio:"清朝末年，上海有一家梨膏店，店门口挂着“天知道”三个大字的牌匾。光绪八年，对面的水果店运来的梨开始腐烂。对门住着夫妻二人，他们正愁没有食物吃，见水果店扔掉了许多烂梨，就拾来削去皮，发现梨肉依然甜美，于是切成小块出售，生意很是兴隆。后来他们把梨熬成梨汁，制成膏糖。春天没有梨吃，人们都想吃梨膏糖，一下子竟成了南方的名产。后来水果店老板知道了梨膏糖的秘密，他气不过，就在夜里写了“天知道”三个字，贴在梨膏店的大门上。男老板却大笑说，正好用这三个字当招牌。后来水果店老板又在墙上画了一只乌龟，男老板说：梨膏糖能止咳、延年益寿，乌龟也是长寿的象征，我们就以乌龟为商标。",
 q:[[1,"夫妻二人最开始是为了填饱肚子才捡的烂梨。",true],
    [2,"人们特别想吃梨膏糖的季节是秋天。",false],
    [3,"水果店老板将梨膏的秘密公之于众了。",false],
    [4,"用乌龟当商标是因为男老板认为乌龟代表着好运。",false],
    [5,"这个故事告诉我们应该把挫折当成机遇。",true]]},
{src:"BĐ2 · Nghe 6–10", audio:"王羲之，晋朝人，是中国历史上著名的书法家之一。他博采众长，自成一家，书法风格独树一帜，被后人誉为“书圣”。他为了把字练好，甚至不停地用手指在衣襟上书写，久而久之，连身上的衣服都磨破了。他曾经在池塘边练字，每次写完就在池塘里洗涤笔砚，时间一久，整个池塘的水都被染成了墨色。王羲之喜欢养鹅，他在院子里修建了两个水池子，一个用来刷洗笔砚，一个用来养鹅。经过观察和研究，他编制了一套以鹅掌划水动作为主的“鹅掌操”，既增强了体力，又促进了习练书法的功力，使自己的晚年生活更加健康充实。",
 q:[[6,"王羲之因出版过很多书而被称为“书圣”。",false],
    [7,"文章列举“衣服磨破”和“池塘水变墨色”两个例子是为了说明王羲之勤奋刻苦。",true],
    [8,"王羲之喜欢在养鹅池里洗笔。",false],
    [9,"“鹅掌操”主要是以鹅掌划水动作为主。",true],
    [10,"王羲之晚年非常孤独和凄凉。",false]]},
{src:"BĐ3 · Nghe 1–5", audio:"韩信出身贫寒，父母早逝，他每天靠讨饭度日。有一天，韩信在河边碰到一个专门给别人洗衣服的老婆婆。老婆婆见他饿得骨瘦如柴，便把自己的饭分一些给他吃，并希望他努力自立。从此以后，他认真读兵书，练习武艺。乡里有一个恶霸羞辱他，让他从胯下爬过去，韩信忍受了眼前之辱。后来，韩信投奔汉王刘邦，率领汉军打败了项羽，协助刘邦建立了汉朝。韩信被封为楚王，回到故乡，派人找到了那个给他饭吃的老婆婆，并赠送她一千两黄金。",
 q:[[1,"早年曾有少量亲戚接济过韩信。",false],
    [2,"老婆婆专门到河边给韩信洗衣服。",false],
    [3,"韩信遇到恶霸之后立志习武。",false],
    [4,"韩信后来协助刘邦建立了汉朝。",true],
    [5,"“一饭千金”这个成语很可能出自这个故事。",true]]},
{src:"BĐ3 · Nghe 6–10", audio:"秦腔是中国汉族最古老的戏剧之一。秦腔主要流行于陕西、甘肃一带，这个地区在古时属于秦国，因此该地区的戏曲被称为“秦腔”。秦腔成形后，传播到全国各地，直接催生了一系列梆子腔戏，成为梆子腔剧种的鼻祖。秦腔唱腔有欢音和苦音之分。苦音腔最能代表秦腔特色，深沉哀婉；欢音腔则欢乐明快。秦腔的表演技艺非常丰富，身段和特技应有尽有。如演《黄河阵》，要用五种法宝道具，如量天尺、翻天印等，可施放长串焰火。",
 q:[[6,"秦腔的命名源自它的流行地区。",true],
    [7,"文中的“鼻祖”可以解释为秦腔是梆子腔剧种的“源头”。",true],
    [8,"欢音腔最能代表秦腔的特点。",false],
    [9,"秦腔的表演综合运用了多种特技。",true],
    [10,"《黄河阵》中使用了五种法宝道具。",true]]},
{src:"BĐ4 · Nghe 1–5", audio:"普洱茶由其产地云南省普洱而得名。普洱茶又分生茶和熟茶，可以从外形、口感、汤色及制作工艺等几个方面来鉴别。生茶口感强烈，茶汤清香，苦而带涩；熟茶则浓稠甘甜，几乎不苦涩。生茶是鲜叶采摘后经杀青、揉捻、晒干等步骤制成的，即生散茶，或叫晒青毛茶。而熟茶是在生散茶的基础上，进行人工快速催熟发酵、洒水渥堆等工序。生普洱茶有清热解毒、消暑减肥等功效；熟茶有暖胃、减肥、降脂、防止动脉硬化、降血压血糖等功效。",
 q:[[1,"普洱茶根据制作工艺而得名。",false],
    [2,"熟普洱茶口感苦而带涩。",false],
    [3,"晒青毛茶是一种熟茶。",false],
    [4,"高血压患者比较适合喝熟普洱茶。",true],
    [5,"这篇文章主要介绍了生、熟普洱茶的区别。",true]]},
{src:"BĐ4 · Nghe 6–10", audio:"四川评书是四川省传统曲艺剧种之一，醒木、折扇、茶碗、汗巾是常见的演出道具。醒木用作吸引听众的注意力，营造气氛。早期的四川评书，是在市井搭棚设台。四川评书有“清棚”和“雷棚”之分。清棚以讲述烟粉、传奇之类的风情故事为主，主要由文人从事说书，讲究“声、才、辩、博”的基本功。雷棚则以讲述历史和金戈铁马的战争故事为主。代表人物李伯清发展出散打评书，常以摆龙门阵、吹牛皮等方式博人一笑。",
 q:[[6,"用于营造现场氛围的是醒木。",true],
    [7,"早期的四川评书是在皇宫里搭棚设台的。",false],
    [8,"文人从事说书讲究“声、才、辩、博”的基本功。",true],
    [9,"最可能出现在“雷棚”中的是童话类书目。",false],
    [10,"李伯清说书擅长细腻地描摹人物心理。",false]]},
{src:"BĐ5 · Nghe 1–5", audio:"一位动物行为学家将鹅蛋分为两组，一组由母鹅孵化，一组由孵化箱孵化。结果由孵化箱孵化出来的小鹅把他当成了妈妈。把两组小鹅放在同一个箱子下面，提起箱子时，一组跑向母鹅，另一组跑向动物学家。这种现象叫“印痕行为”，只需一次或数次经验，就能形成印痕。许多鸟类如果在出生后几个月内被剥夺了学习飞翔的机会，以后就很难学会飞翔，这可能是因为在生命的早期，神经系统只有这一时期才能接受这类刺激。印痕行为也会对晚期的行为产生影响，尤其是繁殖行为。在大熊猫人工繁殖基地，为了避免熊猫宝宝对人产生印痕，饲养员都穿上特制的“熊猫服”工作。",
 q:[[1,"试验中，扣在箱子下的两组小鹅出生时接触的对象不同。",true],
    [2,"印痕行为需要重复观察学习。",false],
    [3,"幼鸟在学习飞翔时，神经系统不能受到刺激。",false],
    [4,"印痕行为会影响动物晚期的繁殖行为。",true],
    [5,"为了避免熊猫宝宝对人产生印痕行为，饲养员要穿上“熊猫服”工作。",true]]},
{src:"BĐ5 · Nghe 6–10", audio:"孟子自幼丧父，母亲一个人抚养他。他们住的地方附近有一块墓地，每天都有送葬的人在忙忙碌碌，孟子就模仿出殡、送葬的情景。孟母决定搬家。不久，孟母把家搬到城里，街上十分热闹，孟子对商人的叫卖声最感兴趣，又模仿着吆喝声做游戏。孟母又决定搬家。这次她搬到城东的学宫对面。学宫是国家兴办的教育机构，聚集着许多既有学问又懂礼仪的读书人。孟子也模仿着演习周礼，不久就进入这所学宫学习。孟母非常高兴，就决定定居下来了。",
 q:[[6,"孟子家旁边的墓地有很多老人。",false],
    [7,"第一次搬家后，孟子开始对做买卖感兴趣。",true],
    [8,"周朝的学宫是国家兴办的教育机构。",true],
    [9,"孟子住在闹市，却能保持贫穷的心态。",false],
    [10,"孟母几次搬家是为了让孟子和邻居处好关系。",false]]}
);

/* ---------- 4. DỊCH 90–93 BẮC ĐẠI (nguồn tiếng Việt, tham khảo theo đáp án chính thức) ---------- */
const TW = "Dịch viết sang tiếng Trung (đề gốc tiếng Hàn – bản tiếng Việt để luyện).";
const TN = "Dịch nói 2 phút (nên tự ghi âm).";
TASK.push(
{src:"BĐ1 – Câu 90",time:15,q:TW,ctx:"Nghệ thuật truyền thống Trung Quốc như thư pháp và gốm sứ có ảnh hưởng lớn đến văn hóa hiện đại. Dù trải qua biến đổi và phát triển theo năm tháng, bản chất của chúng không thay đổi. Nhiều nghệ sĩ hiện đại sáng tác những tác phẩm kết hợp truyền thống và hiện đại, qua đó truyền tải lịch sử và văn hóa Trung Quốc đến thời nay.",tips:"书法、陶瓷、历经岁月的变迁、本质、融合传统与现代、传承",ref:"中国的传统艺术，例如书法和陶瓷，对现代文化产生了巨大影响。这些艺术形式虽然历经岁月的变迁与发展，但其本质未曾改变。许多现代艺术家创作融合传统与现代的作品，通过这些作品将中国的历史与文化传承至现代。"},
{src:"BĐ1 – Câu 91",time:20,q:TW,ctx:"Đường sắt cao tốc Trung Quốc đại diện cho sự tiến bộ công nghệ và sự tiện lợi trong đời sống người dân, được xem là chỉ số quan trọng cho thấy tốc độ hiện đại hóa của Trung Quốc. Nhiều người giờ có thể đi đường dài trong thời gian ngắn; vào dịp lễ tết, vô số người dùng tàu cao tốc để về quê hoặc đi du lịch. Đường sắt cao tốc còn tạo cơ hội chuyển giao công nghệ cho các nước khác, thúc đẩy giao lưu kinh tế, văn hóa, khiến Trung Quốc được coi là nước dẫn đầu về công nghệ đường sắt. Tóm lại, nó tượng trưng cho sự phát triển đổi mới và vị thế dẫn đầu toàn cầu, đồng thời là phương tiện đi lại tiện lợi, hiệu quả.",tips:"技术进步、指标、长途旅行、技术转移、领导者、便捷高效",ref:"中国的高速铁路代表着该国的技术进步和国民生活的便利性。它被视为展示中国实现现代化与发展速度的重要指标。许多中国人现在可以乘坐这种高速铁路，在短时间内长途旅行。在传统的节日或假期，无数人利用高速铁路回乡或前往旅游目的地。此外，中国的高速铁路还为其他国家提供了技术转移的机会，促进了中国与其他国家之间的经济和文化交流。这使得中国在全球铁路技术领域中被视为领导者。总之，中国的高速铁路象征着该国的创新发展和全球领导地位，并已成为中国公民便捷高效的交通工具。"},
{src:"BĐ1 – Câu 92",time:2,q:TN,ctx:"Tôi thử hình dung một ngày trong tương lai khi trí tuệ nhân tạo hoàn toàn hòa vào cuộc sống. Sáng thức dậy, AI tự pha sẵn ly cà phê tôi thích nhất. Trên đường đi làm, xe tự lái đưa tôi đến nơi an toàn. Ở công ty, AI hỗ trợ công việc và giúp tôi quản lý thời gian hiệu quả. Buổi tối, AI gợi ý thực đơn tốt cho sức khỏe, và trước khi ngủ thì báo cho tôi lịch trình ngày mai.",tips:"融入、自动驾驶汽车、辅助、高效管理时间、日程安排",ref:"我设想了一下人工智能完全融入的未来生活的一天。早上醒来，人工智能会自动为我准备我最喜欢的咖啡。上班路上，自动驾驶汽车会安全地把我送到目的地。在工作中，人工智能会辅助我处理事务，并帮我高效管理时间。晚上，人工智能会为我推荐健康的饮食，并在睡前告诉我明天的日程安排。"},
{src:"BĐ1 – Câu 93",time:2,q:TN,ctx:"Khi đối mặt với áp lực, những gợi ý sau sẽ hữu ích. Thứ nhất, hãy nhận biết suy nghĩ và cảm xúc của mình. Thứ hai, duy trì thói quen sống lành mạnh: tập thể dục đều đặn, ăn uống lành mạnh, ngủ đủ giấc. Thứ ba, hãy nghỉ ngơi hợp lý để giải tỏa áp lực và nạp lại năng lượng. Thứ tư, dành thời gian với những người tích cực. Cuối cùng, hãy tìm đến sự giúp đỡ của chuyên gia tâm lý hoặc tư vấn viên.",tips:"意识到、规律的运动、充足的睡眠、补充能量、积极的人、寻求专业人士",ref:"当面对压力时，以下建议将会有所帮助。首先，要意识到自己的想法和情绪。其次，保持健康的生活习惯。规律的运动、健康的饮食习惯和充足的睡眠对于管理压力非常有帮助。第三，要适当休息。通过短暂的休息或假期来缓解压力并补充能量是很好的选择。第四，与积极的人相处。他们的态度和行为往往会影响我们的态度和行为，并有助于减轻压力。最后，寻求专业人士的帮助。"},
{src:"BĐ2 – Câu 90",time:15,q:TW,ctx:"Âm nhạc truyền thống Trung Quốc có ảnh hưởng lớn đến nhạc pop hiện đại. Khi nhạc cụ truyền thống hòa với nhạc cụ hiện đại, giai điệu cổ kết hợp với tiết tấu hiện đại, sức hấp dẫn độc đáo của âm nhạc Trung Quốc ra đời. Nhiều nhạc sĩ Trung Quốc nhờ sự pha trộn này đã tạo ra những tác phẩm gây chú ý trên sân khấu thế giới.",tips:"传统乐器、旋律、节奏、融合、独特魅力、引人注目",ref:"中国传统音乐对现代流行音乐产生了巨大的影响。当传统乐器与现代乐器相融合，古代的旋律与现代的节奏相结合时，就诞生了中国音乐的独特魅力。许多中国音乐家通过这种融合，创作出了在世界舞台上引人注目的音乐作品。"},
{src:"BĐ2 – Câu 91",time:20,q:TW,ctx:"Ở Trung Quốc, khái niệm “tối giản cực độ” ngày càng được ưa chuộng: bớt đi đồ vật và suy nghĩ không cần thiết, chỉ tập trung vào điều quan trọng. Ở các thành phố hiện đại, giữa nhịp sống nhanh và lượng thông tin lớn, người ta ngày càng muốn tìm sự bình yên trong lòng; nhiều người trẻ áp dụng nguyên tắc tối giản để nâng cao chất lượng sống. Xu hướng này cũng ảnh hưởng đến thời trang và thiết kế: thiết kế đơn giản mà tinh tế được ưa chuộng. Lối sống tối giản đã trở thành một phần của lối sống mới, mang lại sự hài lòng và thoải mái hơn.",tips:"极端简约主义、内心的平静、生活质量、简单而精致、满足感",ref:"在中国，“极端简化”或“极端简约主义”这一概念正逐渐受到欢迎。它意味着减少生活中不必要的物品和想法，只专注于重要的事情。特别是，在现代中国城市中，随着生活节奏的加快和信息量的增加，人们越来越倾向于寻求内心的平静。许多年轻一代采纳了极端简约主义的原则，努力提升生活质量。这一趋势也影响了中国的时尚和设计领域。简单而精致的设计受到青睐。极端简约主义在中国已成为一种新的生活方式的一部分，为人们的生活带来了更大的满足感和舒适感。"},
{src:"BĐ2 – Câu 92",time:2,q:TN,ctx:"Thượng Hải đang vươn lên thành trung tâm thời trang và thiết kế. Thành phố có cảnh quan độc đáo nơi kiến trúc hiện đại hòa quyện với kiến trúc cổ điển. Hằng năm có nhiều buổi trình diễn thời trang và triển lãm, các nhà thiết kế hàng đầu thế giới đến đây giới thiệu tác phẩm. Thời trang và thiết kế Thượng Hải đã trở thành trung tâm của văn hóa hiện đại Trung Quốc.",tips:"崛起、时装秀、展览会、全球设计师、核心",ref:"上海正崛起为时尚与设计的中心地。这座城市提供了现代建筑与古典建筑相融合的独特景观。每年，这里都会举办各种时装秀和展览会，吸引全球设计师前来展示他们的作品。上海的时尚与设计已成为中国现代文化的核心。"},
{src:"BĐ2 – Câu 93",time:2,q:TN,ctx:"Các thành phố Trung Quốc đã thay đổi lớn nhờ làn sóng xe đạp công cộng. Chúng giúp việc đi lại thuận tiện và góp phần giảm ùn tắc. Nhiều người, nhất là giới trẻ, dùng xe đạp công cộng hằng ngày, kể cả đi làm; dịch vụ gắn với ứng dụng điện thoại nên dễ tìm và dễ dùng. Tuy nhiên, ở một số nơi đã nảy sinh vấn đề đỗ xe và thu hồi, nên nhiều thành phố đã ban hành quy định và hướng dẫn liên quan. Nhìn chung, xe đạp công cộng đã thay đổi mang tính cách mạng văn hóa giao thông đô thị, giúp đời sống xanh và hiệu quả hơn.",tips:"共享单车热潮、缓解交通拥堵、应用程序、停车和回收问题、法规、环保高效",ref:"中国的城市因为共享单车热潮而经历了巨大的变化。共享单车为人们提供了便利的出行方式，并为缓解交通拥堵问题做出了巨大贡献。许多中国人，尤其是年轻一代，在日常生活中，包括上下班，都使用共享单车。这种服务与智能手机应用程序相结合，使用户能够轻松找到并使用自行车。然而，由于共享单车的普及，一些城市也出现了停车和回收问题。为了解决这些问题，中国多个城市已经制定了相关法规和指导方针。总体来看，共享单车对中国城市的交通文化产生了革命性的变化，从而实现了更加环保和高效的城市生活。"},
{src:"BĐ3 – Câu 90",time:15,q:TW,ctx:"Đi bộ đường dài là cách tốt để cảm nhận thiên nhiên ở cự ly gần. Nhiều người chọn rời xa sự ồn ào của thành phố để đi bộ trong rừng hoặc trên núi, vừa đi vừa tận hưởng không khí trong lành và phong cảnh tươi đẹp.",tips:"徒步旅行、近距离、喧嚣、漫步、清新的空气",ref:"徒步旅行是近距离感受自然的好方法。许多人选择远离城市的喧嚣，到森林或山中漫步。这样走着，享受着清新的空气和美丽的风景。"},
{src:"BĐ3 – Câu 91",time:20,q:TW,ctx:"Trong văn hóa truyền thống Trung Quốc, “có qua có lại” (礼尚往来) là khái niệm quan trọng của quan hệ giữa người với người, dựa trên sự tôn trọng và quan tâm lẫn nhau. Chẳng hạn, khi chúc mừng hay chia buồn, người Trung Quốc có thói quen tặng một món quà nhỏ; người nhận sau này có dịp sẽ đáp lại bằng tấm lòng tương tự – đó là phép lịch sự, giúp gắn bó quan hệ và xây dựng niềm tin. Văn hóa này cũng ăn sâu trong gia đình và bạn bè; trong tiệc sinh nhật hay dịp đặc biệt, người ta qua đó bày tỏ lòng biết ơn và tình yêu thương. Tóm lại, đây là một nguyên tắc cốt lõi giúp duy trì các mối quan hệ sâu sắc hơn.",tips:"礼尚往来、相互尊重和体谅、表达祝贺或哀悼、礼貌、根深蒂固、核心原则",ref:"在中国的传统文化中，“礼尚往来”是基于相互尊重和体谅的人际关系的重要理念。例如，在中国，表达祝贺或哀悼时，有送小礼物的习惯。收到礼物的人在以后有机会时以同样的心意回应，这是一种礼貌。这样的行为有助于加深彼此的关系并建立信任。此外，在中国的家人或朋友之间，这种“礼尚往来”的文化也根深蒂固。在生日派对或特殊活动中，人们通过此来表达感激和爱意。总之，“礼尚往来”是中国社会中维持人际关系更加深厚的核心原则之一。"},
{src:"BĐ3 – Câu 92",time:2,q:TN,ctx:"Thú cưng là một trong những phần hạnh phúc nhất trong cuộc sống của tôi. Chúng không ngừng mang lại niềm vui và tình yêu, an ủi tôi lúc khó khăn. Những biểu cảm và hành động chân thành của chúng làm tôi cười và khiến mỗi ngày tươi sáng hơn. Chúng còn dạy tôi tinh thần trách nhiệm và sự chu đáo, điều rất có ích cho các mối quan hệ của tôi. Thú cưng không chỉ là thú cưng mà là người thân và bạn bè quý giá của tôi.",tips:"安慰、真挚的表情、充满阳光、责任感和体贴",ref:"我的宠物是我生活中最幸福的部分之一。它们不断给我带来欢乐和爱，在我艰难的时刻给予我安慰。它们真挚的表情和行动让我欢笑，让我的每一天都充满阳光。此外，它们还教会了我责任感和体贴，这对我的人际关系也有很大的帮助。我的宠物不仅仅是宠物，它们是我珍贵的家人和朋友。"},
{src:"BĐ3 – Câu 93",time:2,q:TN,ctx:"Với người trẻ, lập kế hoạch nghề nghiệp là bước quan trọng cho tương lai. Từ nhỏ, họ được khuyến khích theo đuổi ước mơ và lên kế hoạch dưới sự hướng dẫn của gia đình, thầy cô. Ngày nay ở Trung Quốc, giáo dục đại học càng được coi trọng; bằng cử nhân hay thạc sĩ là điều kiện bắt buộc của nhiều nghề, nên người trẻ đầu tư nhiều thời gian, công sức để chuẩn bị thi đại học. Mặt khác, họ khám phá nhiều nghề khác nhau: doanh nhân, nghệ sĩ, nhà khoa học, nhà giáo… và cố gắng phát huy tối đa đam mê, năng lực. Tóm lại, đây là quá trình cần thiết để họ chịu trách nhiệm về tương lai và xây dựng sự nghiệp thành công.",tips:"职业规划、必备条件、投入时间和精力、职业生涯、发挥潜力",ref:"对于年轻人来说，职业规划是他们为未来迈出的重要一步。从小，他们就被鼓励追求自己的梦想，并在家人或老师的指导下规划未来。如今，在中国，高等教育被视为更加重要，获得学士或硕士学位已成为许多职业的必备条件。因此，中国的年轻人正在投入大量的时间和精力来为大学入学做准备。另一方面，中国年轻人梦想在人生的各个领域取得成功，并正在探索各种职业。总之，职业规划对于中国的年轻一代来说是承担自己未来责任、建立成功职业生涯的必经过程。"},
{src:"BĐ4 – Câu 90",time:15,q:TW,ctx:"Văn hóa trà Trung Quốc có lịch sử hàng nghìn năm. Uống trà không chỉ là thưởng thức một thức uống mà còn mang ý nghĩa sâu xa. Từ cách chế biến trà truyền thống đến triết lý ẩn trong chén trà, tất cả phản ánh di sản văn hóa sâu sắc của Trung Quốc. Ngay ở các đô thị hiện đại, vẫn dễ thấy dấu ấn và ảnh hưởng của văn hóa trà truyền thống.",tips:"茶文化、蕴含、制作方法、哲学、文化遗产、痕迹",ref:"中国的茶文化有着数千年的历史。饮茶不仅仅是为了享受饮料本身，更蕴含了深远的意义。从传统的茶叶制作方法到茶饮中所蕴含的哲学，这些都体现了中国深厚的文化遗产。在现代化的中国城市中，也很容易发现这种传统茶文化的痕迹和影响。"},
{src:"BĐ4 – Câu 91",time:20,q:TW,ctx:"Khái niệm “dưỡng sinh” – bảo vệ sức khỏe – được coi trọng ở Trung Quốc suốt nhiều thế kỷ, nghĩa là giữ cân bằng thân và tâm, tìm cách phòng bệnh. Nhiều người có thói quen tập thái cực quyền ở công viên vào buổi sáng; họ cũng chú trọng ăn uống theo mùa. Gần đây, giới trẻ cũng ngày càng quan tâm đến cách dưỡng sinh truyền thống: giữa áp lực thời đại số và nhịp sống bận rộn, dành thời gian hòa mình với thiên nhiên trở nên quan trọng. Tóm lại, dưỡng sinh là phần cốt lõi của văn hóa Trung Quốc và tiếp tục được truyền lại như một cách nâng cao chất lượng sống.",tips:"养生、身心的平衡、预防疾病、太极拳、因时制宜、传承",ref:"中国传统的“养生”或“保护健康”的概念已被重视了数个世纪。这意味着维持身心的平衡，寻找预防疾病的方法。许多中国人习惯于早上在公园练习太极拳来养生。此外，他们也重视因时制宜，根据不同季节摄入适宜的食物来维持健康。最近，年轻一代也开始对中国的传统养生方法产生兴趣。在数字化时代的压力和繁忙的日常生活中，人们认为与自然共处的时间变得尤为重要。总的来说，“养生”是中国文化的核心部分，作为一种提高人类生活质量的方法，它一直在被传承着。"},
{src:"BĐ4 – Câu 92",time:2,q:TN,ctx:"Tối thứ Sáu, khu Tam Lý Đồn (三里屯) ở Bắc Kinh vô cùng sôi động. Người trẻ tận hưởng buổi tối ở các quán bar và câu lạc bộ. Dưới ánh đèn thành phố, âm nhạc, khiêu vũ và thời trang hòa làm một. Tam Lý Đồn là một trong những địa điểm tiêu biểu của văn hóa giới trẻ Trung Quốc hiện đại, nơi trải nghiệm xu hướng văn化 mới của thành phố.",tips:"热闹非凡、酒吧和俱乐部、融为一体、代表性场所、文化潮流",ref:"周五晚上，北京的三里屯热闹非凡。年轻人们在各式各样的酒吧和俱乐部里享受夜晚。城市的灯光下，音乐、舞蹈和时尚融为一体。三里屯作为中国现代青年文化的代表性场所之一，是体验城市新文化潮流的好去处。"},
{src:"BĐ4 – Câu 93",time:2,q:TN,ctx:"Podcast đang trở thành một trong những hình thức chính của truyền thông số. Ưu điểm lớn nhất là tính linh hoạt: nghe được mọi lúc mọi nơi, trên điện thoại, máy tính bảng, máy tính. Podcast có nhiều chủ đề như học tập, giải trí, tin tức, nên dễ tìm thông tin mình cần. Nó còn giúp tận dụng thời gian: nghe khi đi làm, dọn dẹp, tập thể dục. Cuối cùng, podcast cung cấp thông tin, kiến thức có chiều sâu, giúp hiểu sâu một chủ đề và có góc nhìn mới.",tips:"播客、数字媒体、灵活性、多种设备、有效利用时间、新的观点",ref:"播客目前正成为数字媒体的主要形式之一。播客最大的优点之一就是其灵活性。人们可以在任何时间、任何地点收听播客，而且可以通过智能手机、平板电脑、电脑等多种设备访问。此外，播客涵盖了学习、娱乐、新闻更新等多种主题，使人们可以轻松获取所需的信息。进一步来说，播客有助于人们高效地利用时间，如在上下班、打扫、运动时都可以收听。最后，播客是提供深度信息和知识的媒体，可以帮助人们更深入地理解特定主题并获得新的观点。"},
{src:"BĐ5 – Câu 90",time:15,q:TW,ctx:"Phòng gym và nhà thi đấu thể thao đang tăng nhanh khắp thành phố. Người ta ngày càng coi trọng việc tập luyện để giữ dáng và giữ sức khỏe. Đặc biệt, người hiện đại chọn tập luyện đều đặn để giải tỏa áp lực và theo đuổi cuộc sống lành mạnh.",tips:"健身房、管理身材、缓解压力、坚持运动",ref:"健身房和体育馆在城市各地迅速增加。人们越来越重视运动，以此来管理身材和保持健康。特别是现代人，为了缓解日常生活中的压力和追求健康生活，选择坚持运动。"},
{src:"BĐ5 – Câu 91",time:20,q:TW,ctx:"Những năm gần đây Trung Quốc phát triển nhanh trong lĩnh vực ô tô năng lượng mới, nhờ người dân ngày càng quan tâm đến môi trường và phát triển bền vững. Ô tô năng lượng mới được xem là công cụ quan trọng để cải thiện chất lượng không khí và giảm phát thải carbon; nhiều thành phố có tiền thưởng và ưu đãi cho người mua. Các hãng xe Trung Quốc cũng trở thành những người dẫn đầu thế giới, năng lực nghiên cứu phát triển được đánh giá cao trên thị trường quốc tế. Tóm lại, ngành này phản ánh sự thay đổi nhận thức của người dân và là bước đi quan trọng hướng tới tương lai tốt đẹp hơn.",tips:"新能源汽车、可持续发展、碳排放、奖励金、优惠政策、领头羊、研发能力",ref:"近年来，中国在新能源汽车领域取得了快速发展。这一发展得益于中国民众对环境问题和可持续发展的关注度日益提升。新能源汽车被视为改善城市空气质量、减少碳排放的重要手段。中国许多城市都为购买新能源汽车的消费者提供奖励金和其他优惠政策，以促进新能源汽车的普及。此外，中国的汽车制造商也在全球新能源汽车领域崭露头角，成为了领头羊。他们的研发能力在国际市场上也获得了高度评价。总之，中国的新能源汽车产业不仅反映了民众对环境保护和可持续发展的意识转变，还为此迈出了走向更美好未来的重要一步。"},
{src:"BĐ5 – Câu 92",time:2,q:TN,ctx:"Trong cuộc sống bận rộn, dịch vụ đặt đồ ăn giao tận nơi rất được ưa chuộng. Qua ứng dụng điện thoại có thể dễ dàng đặt nhiều món, giao nhanh đến nhà hay văn phòng. Dịch vụ này được nhiều người yêu thích nhờ sự tiện lợi và đa dạng.",tips:"外卖订餐、应用程序、送达、便利性和多样性",ref:"在忙碌的日常生活中，外卖订餐服务深受欢迎。通过智能手机应用程序，可以轻松订购各种美食，并快速送达到家或办公室。这项服务因其便利性和多样性受到许多人的喜爱。"},
{src:"BĐ5 – Câu 93",time:2,q:TN,ctx:"Trung Quốc có văn hóa ẩm thực đa dạng bậc nhất thế giới, trong đó ăn chay đã có chỗ đứng từ xa xưa. Món ăn truyền thống dùng nhiều loại rau, nấm, đậu phụ để làm nên những món ngon, bổ dưỡng. Gần đây, khi mọi người quan tâm hơn đến sức khỏe, ăn chay cũng phổ biến trong giới trẻ; nhiều nhà hàng có thực đơn chay đa dạng. Không chỉ vậy, trong văn hóa ẩm thực đường phố cũng có nhiều món ăn vặt chay được yêu thích. Văn hóa ăn chay Trung Quốc không ngừng phát triển giữa hiện đại và truyền thống.",tips:"素食主义、一席之地、蘑菇、豆腐、营养丰富、街头美食、演变",ref:"中国拥有世界上最丰富多样的饮食文化。其中，素食主义自古以来就在中国人中占据了一席之地。在传统的中国菜肴中，人们利用各种各样的蔬菜、蘑菇、豆腐等食材，制作出美味且营养丰富的佳肴。近年来，随着人们对健康关注的增加，素食主义也在中国年轻一代中流行起来。许多餐厅和饭馆都提供多样化的素食菜单。在中国的街头美食文化中，也有许多素食小吃备受欢迎。中国的素食文化在现代与传统之间不断发展和演变。"}
);

/* ---------- 5. NÓI 98 BẮC ĐẠI ---------- */
const TIP_BD98 = "我认为…… → 理由一 → 理由二 → 举个例子 → 总之……\nTự ghi âm, rồi đối chiếu bài mẫu câu 98 trong file đáp án Bắc Đại.";
TASK.push(
{src:"BĐ1 – Câu 98",time:3,q:"Nói quan điểm 3 phút.",ctx:"孟子：“故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身。”谈谈你对这句话的认识。",tips:TIP_BD98},
{src:"BĐ2 – Câu 98",time:3,q:"Nói quan điểm 3 phút.",ctx:"屠呦呦：“真实的科研是为了人类，而非荣誉。”谈谈你的认识。",tips:TIP_BD98},
{src:"BĐ3 – Câu 98",time:3,q:"Nói quan điểm 3 phút.",ctx:"林徽因在国家危难时谢绝出国，投身古建筑保护。谈谈你对承担社会责任的认识。",tips:TIP_BD98},
{src:"BĐ4 – Câu 98",time:3,q:"Nói quan điểm 3 phút.",ctx:"王阳明提出“知行合一”：知识如果不转化为实践，则毫无价值。谈谈你的认识。",tips:TIP_BD98},
{src:"BĐ5 – Câu 98",time:3,q:"Nói quan điểm 3 phút.",ctx:"黄伟芬：“航天的挑战与风险永远伴随，但正是这些困难与未知驱使我们不断前进。”谈谈你对航天事业及人类探索未知精神的看法。",tips:TIP_BD98}
);
