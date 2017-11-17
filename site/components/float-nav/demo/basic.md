# 基本使用

- order: 0

基本用法。

---

````jsx

import FloatNav from 'uxcore-float-nav';

const { NavItem } = FloatNav;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(link, orderNumber) {
    console.log('handleClick', link, orderNumber);
  }

  renderArticle() {
    return (
      <div className="article" style={{
        marginRight: '200px',
        fontSize: '14px',
      }}
      >
        <h1>唐纳德·特朗普</h1>
        <div>唐纳德·特朗普，第45任美国总统，1946年6月14日生于美国纽约，政治家、商人、作家、主持人。特朗普1968年从宾夕法尼亚大学沃顿商学院毕业后，进入其父的房地产公司工作，并在1971年开始掌管公司运营。在随后几十年间，特朗普开始建立自己的房地产王国，人称“地产之王”。</div>
        <div>除房地产外，特朗普将投资范围延伸到其他行业，包括开设赌场、高尔夫球场等。他还涉足娱乐界，是美国真人秀《名人学徒》等电视节目的主持人，并担任“环球小姐”选美大赛主席。美国杂志《福布斯》在去年6月评估特朗普资产净值约为45亿美元，特朗普则称超过100亿美元。</div>
        <div>特朗普在过去20年间分别支持过共和党和民主党各主要总统竞选者。2015年6月，特朗普以共和党竞选者身份正式参加2016年美国总统选举。此前，特朗普没有担任过公共职务。特朗普结过3次婚，育有5个子女。</div>
        <div>2016年11月9日，美国大选计票结果显示：共和党候选人唐纳德·特朗普已获得了276张选举人票，超过270张选举人票的获胜标准，当选美国第45任总统。唐纳德·特朗普于当地时间2017年1月20日中午在美国首都华盛顿宣誓就职，正式成为美国第45任总统。</div>
        <h2 id="p1">人物经历</h2>
        <h3 id="p1-1">创业经历</h3>
        <div>1946年6月14日，特朗普在纽约市出生，排行老二，上有一个姐姐，下有两个弟弟、一个妹妹。由于祖父英年早逝，父亲为帮助家计，甚早即决意创业，发现房地产生意颇具“钱”途，遂创设“特朗普公司”，专门在纽约市皇后区及邻近地区兴建并经营中型公寓，供一般民众租赁或购买。</div>
        <div>在父母亲友的爱心呵护下，特朗普自幼即满腹自信，活力四射，无法静下来用功读书。13岁那年，父母只好送他去“纽约军事学校”求学，冀望军校的严格训练能帮助他力争上游。在军校就读期间，特朗普人缘甚佳，不仅学业成绩优异，也是运动健将，1964年自军校毕业时，领袖气质已隐然成形。</div>
        <div>离开军校后，特朗普获准进入隶属常春藤联盟的宾夕法尼亚大学沃顿商学院就读。大学时代，特朗普孜孜不倦地汲取商业领域新知，培养机敏生意眼光，加上父亲耳提面命的经营秘诀，大四时，已蠢蠢欲动，欲在商界闯出一片天。他不时去国外考察最新与未来的经济走向，深切体认现今最重要的企业经营战略就是“市场营销”。</div>
        <h3 id="p1-2">参选总统</h3>
        <div>唐纳德·特朗普曾经积极活动以赢得2012年美国总统选举共和党的提名，挑战巴拉克·奥巴马，他还因为质疑奥巴马总统是否在美国出生而引起关注。奥巴马总统为了结束这场争议，不得不公布了他的出生证。但是他中途宣布退出美国总统选举共和党的提名。</div>
        <div>2015年6月17日，特朗普在纽约市第五大道特朗普大厦宣布，决定参加总统大选。“我正式宣布参加美国总统竞选，我们要让美国再次强大起来！”</div>
        <div>特朗普是第12位宣布参加2016年总统竞选的共和党人。</div>
        <h3 id="p1-3">宣誓就职</h3>
        <div>唐纳德·特朗普于当地时间2017年1月20日中午在美国首都华盛顿宣誓就职，正式成为美国第45任总统。</div>
        <h2 id="p2">多重身份</h2>
        <h3 id="p2-1">名人</h3>
        <div>特朗普的突出是因为他敢说敢做、敢做敢当的言谈与行事风格，加上他的私生活颇具趣味性，特朗普不仅曾是美国《商业周刊》封面人物，亦曾出现在全美最畅销的八卦杂志《国家询问报》的头条新闻。</div>
        <div>唐纳德-特朗普的家位于纽约的高尚住宅区，在他豪宅的客厅中央，伫立着巨型的大理石喷泉。生活奢侈的特朗普也是美国最招摇的富翁。他在纽约第五大道公寓的门都非得镀上黄金，以显示他是多么与众不同。</div>
        <div>全美散布着以他的名字命名的高楼大厦、游艇。特朗普成为美国传媒热衷的人物，《间谍》杂志宣称“特朗普是一个浅薄庸俗的暴发户”，而美国著名讽刺连环漫画《杜恩斯比利》的主编也把特朗普作为头号攻击对象。上世纪90年代初期的时候，特朗普价值15亿美元巨资的地产王国曾遭遇巨大滑铁卢，他丧失了2/3的财富，1997年却以自传《特朗普：回归的艺术》而重振雄风。</div>
        <h3 id="p2-2">富翁</h3>
        <div>特朗普的媒体曝光率非常高，喜欢跟摇滚明星似的，每次亮相都美女环绕，所以他也就非常喜欢做跟美女相关的事情，环球小姐大赛也正是他和NBC一起支持的活动；他还喜欢和超级模特结婚。在工作繁忙、生活多彩多姿之余，又开始对于选美活动产生浓厚兴趣，遂一举买下“环球小姐”、“美国小姐”和“美国妙龄小姐”选拔委员会的支援机构与主办权，成为这些选美活动的后台老板。</div>
        <div>此外，特朗普善于作秀，谙熟自我宣传之道。由于太过招摇，特朗普一度被认为是美国最讨人嫌的富翁。这次节目播出时，为显示他“王者归来”的风范，特朗普还在3月22日出版的《纽约时报》、《华盛顿邮报》以及《华尔街日报》等美国主流媒体刊登了好几个整版广告，重点推介他的个人、他的公司以及他的产品。特朗普公司的人声称，如今他们平均每天会接到超过50个预约采访的电话。</div>
        <h3 id="p2-3">作家</h3>
        <div>特朗普是一位非常娴熟的作家。他的第一本自传《做生意的艺术》是每个生意人的“圣经”，卖出了300多万本，被《纽约时报》评为最畅销的书籍，并连续在排行榜上维持了32星期的冠军地位。《结局，颠峰生存》和他的第三本书《回归的艺术》一样，也是《纽约时报》评出的最佳书籍和最畅销书籍的第一名。特朗普最新的小说《美国，值得我们拥有》开始了他文学化的写作路线。特朗普的书与美国民众的工作生活息息相关，同时也阐述了他对美国政治、经济、文化的看法，这些都是他作品无穷魅力的来源。</div>
        <h3 id="p2-4">演艺界明星</h3>
        <div>唐纳德-特朗普是一位亿万富翁，在他投资制作真人秀《飞黄腾达》之前，是一位成功的房地产商。不少媒体认为，再度出山的特朗普首先得益于专门为他量身定做的真人秀节目《飞黄腾达》。</div>
        <div>特朗普把他的热门真人秀节目《飞黄腾达》向普通人敞开，这一做法得到了国际媒介的普遍赞同，虽然特朗普并不这样认为。但事实却是如此。第一季的《飞黄腾达》迎来了2000多“想做唐纳德”的人，11个城市在争取主持这个节目的机会。最后的竞赛当然在纽约的“特朗普大厦”举行。</div>
        <h2 id="p3">个人生活</h2>
        <h3 id="p3-1">首任妻子</h3>
        <div>伊凡娜·泽尼科娃，曾是一名时装模特，后任川普集团室内设计副主席，主持建造集团名下多处酒店和赌场。在1977年与特朗普结婚，之后冠夫姓更名为伊凡娜-特朗普，他们俩人共生有三名子女。两人在1992年离婚。</div>
        <h3 id="p3-2">第二任妻子</h3>
        <div>玛拉·梅普尔斯，前夏威夷小姐，是特朗普结束与前妻伊凡娜13年婚姻的罪魁祸首。1993年，梅普尔斯成为第二位特朗普太太，而且为特朗普生下他们的女儿蒂芙妮，5年之两人就分道扬镳了。</div>
        <h3 id="p3-3">第三任妻子</h3>
        <div>梅兰娜·特朗普，2004年4月26日，特朗普向其求婚。2005年1月22日在佛罗里达的棕榈滩结婚。2006年3月20日，两人生下了他们的一个孩子，也是唐纳德的第五个孩子Barron William Trump。</div>
        <h3 id="p3-4">五个子女</h3>
        <div><b>小唐纳德·特朗普</b>：毕业于沃顿商学院，会讲流利的捷克语。作为特朗普集团的执行副总裁，在世界各地拓展新项目。小唐纳德的家庭生活幸福，有五个孩子（这一点和父亲一样）。</div>
        <div><b>伊万卡·特朗普</b>：帮父亲做房地产，自创品牌，福布斯评她是最有钱的80后女富豪， 成功商业女性的标杆。不仅是父亲公司采购和发展部门的执行副总裁，知名模特，还是《纽约时报》评出的畅销书作者。这育有3个孩子。</div>
        <div><b>埃里克·特朗普</b>：乔治敦大学优秀毕业生，同样任职特朗普集团副总裁，与哥哥姐姐一同拓展了公司在国际和国内的零售、商业、酒店和高尔夫等业务。他还于10年前创立了埃里克·特朗普基金（ETF），资助了儿童癌症的研究与治疗。</div>
        <div><b>蒂芙尼·特朗普</b>：毕业于宾夕法尼亚大学，在17岁的时候发布了一首单曲名为《像鸟儿一样》。</div>
        <div><b>巴伦·特朗普</b>：帅气的小绅士，会讲流利的斯洛文尼亚语。</div>
        <h2 id="p4">人物评价</h2>
        <div>拉里·金：他是个传奇人物，一生起伏跌宕”“现在没有低潮，未来只有高潮”。</div>
        <div>普京：毫无疑问，他很聪明且才能出众”，“他很有才华、人格出众”。</div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <FloatNav
          ref={node => (this.nav = node)}
          showOrderNumber
          height={250}
          content={this.renderArticle()}
        >
          <NavItem title={'人物经历'} anchor={'p1'}>
            <NavItem title={'创业经历'} anchor={'p1-1'} onClick={this.handleClick} />
            <NavItem title={'参选总统'} anchor={'p1-2'} />
            <NavItem title={'宣誓就职'} anchor={'p1-3'} />
          </NavItem>
          <NavItem title={'多重身份'} anchor={'p2'}>
            <NavItem title={'名人'} anchor={'p2-1'} />
            <NavItem title={'富商'} anchor={'p2-2'} />
            <NavItem title={'作家'} anchor={'p2-3'} />
            <NavItem title={'演艺界明星'} anchor={'p2-4'} />
          </NavItem>
          <NavItem title={'个人生活'} anchor={'p3'}>
            <NavItem title={'首任妻子'} anchor={'p3-1'} />
            <NavItem title={'第二任妻子'} anchor={'p3-2'} />
            <NavItem title={'第三任妻子'} anchor={'p3-3'} />
            <NavItem title={'五个子女'} anchor={'p3-4'} />
          </NavItem>
          <NavItem title={'人物评价'} anchor={'p4'} />
        </FloatNav>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-float-nav-demo-basic'));
````