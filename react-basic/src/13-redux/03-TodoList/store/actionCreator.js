const removeDataAction = (index) => {
    return {
        type: "REMOVE_DATA",
        index,
    }
}
const putDataAction = (task) => {
    return {
        type: "PUT_DATA",
        task,
    }
}
const setDataAction = (data) => {
    return {
        type: "SET_DATA",
        data,
    }
}
const loadDataAction = () => {
    return (dispatch) => {
        // ajax 异步请求
        // fetch('/react-basic/public/position.json')
        //     .then((response) => {
        //         console.log(response.json());
        //     })
        //     .then(result => {
        //         console.log(result);
        //     })
        let data = [{
            "tname": "松山湖材料实验室",
            "name": "博士后科研技术岗",
            "sum": "若干",
            "do": "",
            "need": "任职要求：国内外知名大学博士学位获得者；相关一级学科研究方向：<br/>1、材料类：材料科学与工程、金属材料、热处理、材料加工、无机非金属材料、材料物理与化学、能源材料；<br/>2、机械类：机械设计及自动化、自动化及机电、机械制造、机械电子、机电一体化、热能与动力工程；<br/>3、光学类：应用物理、光电催化、纳米等离激元光子学、光物理、光学；<br/>4、化学类：生物医学工程、药学、化学、电化学、化工专业、无机化学；<br/>5、物理类：工程热物理、材料物理与化学、凝聚态物理、物理电子、光物理；<br/>6、电子通信、计算机类：计算机技术、电子工程、电子信息类、通信工程、半导体器件、微电子与固体电子学；非相关专业，但有志从事该学科方向研究工作的优秀人才，亦可按此岗位投递。",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=117682842&ctmid=4560952"
        }, {
            "tname": "松山湖材料实验室",
            "name": "综合行政职能岗",
            "sum": "若干",
            "do": "",
            "need": "1、招聘部门：综合事务管理部、人才人事管理部、科研项目管理部、后勤基建管理部、财务部；<br/>2、 岗位类型：宣传主管、文秘岗、对外交流岗、常务副主任秘书、法务专员、信息化管理员；招聘及培训业务主管、研究生业务主管、人才项目主管；国家、部委项目主管；水电工程师；预算管理岗；<br/>3、 相关专业：汉语言文学、新闻传播学、行政文秘、法学、计算机、软件工程、信息管理；人力资源、心理学；材料学、物理学；水利水电、机电；财务、审计、金融等。<br/>4、 学历要求：全日制本科及以上学历。<br/>诚挚欢迎有类似岗位经验的优秀人才加入松山湖材料实验室！",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=117753719&ctmid=4560952"
        }, {
            "tname": "材料制备和表征平台",
            "name": "材料制备和表征平台研发工程师",
            "sum": "3",
            "do": "1、参与实验室建设，设备和零件的购买和维护；<br/>2、学习和掌握扫描隧道显微镜（STM）等科学分析仪器的操作使用，掌握低维材料的制备和分析方法；<br/>3、按操作规程开展实验工作。",
            "need": "1、全日制本科学历，材料类，物理学类，电子类等相关专业；<br/>2、具有强烈的科研兴趣，爱好学习，做事踏实勤奋，思维清晰，有责任心；<br/>3、熟练的英文听说与交流能力。",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=117502780&ctmid=4560952"
        }, {
            "tname": "材料计算与数据库平台",
            "name": "高性能计算系统工程师",
            "sum": "1",
            "do": "1、负责天工超算集群的日常管理、调配及维护，如调度系统、计算节点、操作系统、存储系统、Infiniband网络等；<br/>2、负责监测HPC集群的使用效率及情况，总结经验，给出调整及优化方案；<br/>3、根据发展需求，调整或扩展HPC集群计算系统；<br/>4、负责集群管理软件、应用软件的配置、维护、升级和优化；<br/>5、新增用户计算账号开设及其管理；<br/>6、其他任务。",
            "need": "1、全日制本科学历及以上；<br/>2、具有管理运维超算集群经验者优先；<br/>3、熟练掌握Linux的各项操作，编写过批量系统运维脚本；<br/>4、了解Slurm等任务调度系统；<br/>5、有部署系统管理软件经验者优先，如NIS，LDAP等；<br/>6、有使用python等开发门户站点经验者优先；<br/>7、具有良好的团队合作精神，服从实验室管理规章制度，具有坚持探索精神。",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=117502718&ctmid=4560952"
        }, {
            "tname": "材料计算与数据库平台",
            "name": "数据库平台运维工程师",
            "sum": "1",
            "do": "1、负责中心机房运行和日常硬件维护,按时按质完成日常巡检工作；<br/>2、定期检查机房设备运行状况，并维护和保障机房基础设施的安全及正常运行；<br/>3、负责及时响应、解决机房系统设施的故障；<br/>4、负责机房各类系统运行数据的查询与分析；<br/>5、负责监控系统，及时发现问题并处理紧急情况；<br/>6、其他任务。",
            "need": "1、全日制本科学历及以上，具有相关从业经验者优先，具有在大型超算中心实际运维经验者优先；<br/>2、熟悉Linux、Windows操作系统的应用和维护；<br/>3、熟悉网络知识,并对机房异常状况有敏锐的反应能力；<br/>4、熟悉主机、存储、防火墙、交换机、路由器、VPN、IDS相关安装和维护；<br/>5、具有良好的团队协作精神,能够适应加班,可以做到7*24响应处理各类应急事件。",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=117502659&ctmid=4560952"
        }, {
            "tname": "微加工与器件平台",
            "name": "微加工与器件平台工程师",
            "sum": "3",
            "do": "1、按照实验规程操作设备开展实验工作，记录实验数据；<br/>2、维护保养设备，实验室日常工作；<br/>3、样品检测及清洗。",
            "need": "1、全日制本科学历，材料类，电子类，机械类等相关专业，有微纳加工或者材料外延生长设备维护经验优先；<br/>2、具有良好的团队合作精神，服从实验室管理规章制度，具有坚持探索精神。",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=117503451&ctmid=4560952"
        }, {
            "tname": "中子科学平台",
            "name": "中子科学平台工程师（设备维护）",
            "sum": "1",
            "do": "1、按照实验规程操作设备开展实验工作，记录实验数据；<br/>2、维护保养设备，实验室日常工作；<br/>3、样品检测及清洗。",
            "need": "1、全日制本科毕业，材料，物理，化学，工程等专业；<br/>2、有晶体生长经验者优先；<br/>3、有责任心，能解决实际问题，有良好的动手能力。",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=117502476&ctmid=4560952"
        }, {
            "tname": "中子科学平台",
            "name": "中子科学平台工程师（无机材料）",
            "sum": "1",
            "do": "1、实验室搭建与维护；<br/>2、维护单晶生长炉与粉末烧结炉；<br/>3、维护XRD及劳厄X射线衍射仪；<br/>4、按操作规程开展实验工作。",
            "need": "1、全日制本科学历，材料类，物理学类，无机化学类，电子类，机械类等相关专业，有无机材料合成以及相关设备使用经验。熟悉机械加工或CAD制图优先；<br/>2、出苦耐劳，具有良好的团队合作精神，善于沟通协调，服从实验室管理规章制度；<br/>3、熟练的英文听说与交流能力。",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=117502545&ctmid=4560952"
        }, {
            "tname": "生物界面团队",
            "name": "生物界面团队工程师",
            "sum": "1",
            "do": "生物界面团队日常实验及相关技术支撑工作",
            "need": "1、全日制硕士学历，生物化学，分子生物学，生物物理等相关专业；<br/>2、主要从事生物化学和分子生物学方面基础实验和团队的支撑工作，要求具有较强的专业基础知识和团队管理能力，具有较强的探索研发能力，团队合作精神，善于沟通，较强的项目材料撰写能力，对生物物理交叉学科研究有积极的兴趣；<br/>3、能积极配合团队完成交付的其它任务。",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=117503416&ctmid=4560952"
        }, {
            "tname": "新能源催化材料团队",
            "name": "新能源催化材料团队工程师",
            "sum": "2",
            "do": "新能源催化材料团队日常实验及相关技术支撑工作",
            "need": "1、全日制硕士学历，光/电催化（水分解、二氧化碳还原、固氮等）、电化学、纳米等离激元光子学、光物理及相关、工程塑料、高分子复合材料等专业方向；<br/>2、能吃苦耐劳，具有较好的学习能力、动手能力及高度的团队精神。",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=117503497&ctmid=4560952"
        }, {
            "tname": "原子层沉积纳米光电功能薄膜材料与新型光电探测器件",
            "name": "半导体材料与器件工程师",
            "sum": "1",
            "do": "1、负责半导体材料生长或相关器件工艺研究；<br/>2、负责半导体材料或器件的性能表征，性能测试；<br/>3、负责相关设备的维护、操作、培训和使用管理；<br/>4、完成与产品相关的其他工作或上级领导交代的其他任务。",
            "need": "1、硕士研究生以上学历，半导体器件、微电子学与固体电子学、材料物理等相关专业；<br/>2、具有半导体材料及微电子器件工艺研究经历。",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=117502252&ctmid=4560952"
        }]
        dispatch(setDataAction(data))
    }
}
export {
    removeDataAction,
    putDataAction,
    setDataAction,
    loadDataAction
}