// 個人資訊數據
export const personalInfo = {
  name: "黃子豪",
  englishName: "Howard Huang",
  title: "Backend Engineer / DevOps Engineer",
  email: "a22511234@gmail.com",
  phone: "0981-864-079",
  website: "https://howard0720.cc",
  bio: "Hi！我是黃子豪，畢業於國立臺灣科技大學資訊管理研究所，目前在台積電 IT 擔任 DevOps Engineer，並在團隊中積極任事，喜歡組織和分配任務，並樂於協助夥伴。我對資訊領域充滿熱情，自學 Spring Boot 與 Spring Security 並結合 Azure 雲端平台，以及新興技術。",
  bio2: "努力克服挑戰並不斷進步。曾在富邦人壽、新光人壽資訊處和KPMG數位安全顧問部擔任實習生，參與系統測試和系統開發工作，以及協助客戶符合資安與個資相關規範。",
  bio3: "擁有出色的溝通和理解能力，喜歡不斷學習新知識不斷成長，充分發揮所學專長，期許未來成為一名T型人才，擁有豐富的專業知識和技能，並具有與其他領域專家合作的能力，解決跨領域的問題和挑戰。",
  socialLinks: [
    { platform: "email", url: "mailto:a22511234@gmail.com" },
    { platform: "phone", url: "tel:0981864079" },
    { platform: "website", url: "https://howard0720.cc" }
  ]
};

// 教育經歷數據
export const educationData = [
  {
    school: "國立台灣科技大學",
    degree: "碩士",
    program: "資訊管理學系",
    period: "Aug 2022 – July 2024",
    achievements: [
      "於 2023 全國資安全國資訊安全會議發表論文",
      "獲得 2023 KPMG教育基金會獎學金",
      "獲得 2023-2024 中華扶輪教育基金會獎學金"
    ]
  },
  {
    school: "東吳大學",
    degree: "學士",
    program: "資訊管理學系 | 金融科技學程",
    period: "Aug 2018 - Jul 2022",
    achievements: [
      "107-1、109-2東吳大學資訊管理學系書卷獎第二名",
      "109-2 東吳大學資訊管理學系程式設計競賽第一名",
      "2021年資訊服務應用競賽泰坦敏捷開發組第三名"
    ]
  }
];

export const experienceData = [
  {
    company: "TSMC 台積電",
    position: "DevOps Engineer",
    period: "Nov. 2024 – Now",
    responsibilities: [
      "團隊採取敏捷式開發",
      "透過資料導向與函數式程式設計開發系統",
      "採取TDD的方式進行開發，試想可能的測試案例再進行開發，測試通過後，再重構程式碼",
      "透過CQRS的方式將查詢與命令分離，解決資料庫效能問題",
      "利用Event Sourcing的方式，記入每個事件的發生",
      "透過Predicate 方式將input data過濾驗證，避免不必要的錯誤",
    ]
  },
  {
    company: "KPMG 安侯建業",
    position: "數位安全顧問部門實習生",
    period: "Jul 2022 – Sep 2024",
    responsibilities: [
      "協助顧問師針對客戶的 ISO 27001 與 ISO 27701 文件修改與製作",
      "協助ISO 27001 資安稽核實務",
      "撰寫VBA程式碼，協助顧問師進行文件製作，減少時間成本",
    ]
  },
  {
    company: "新光人壽壽險資訊部",
    position: "壽險資訊部實習生",
    period: "Feb 2022 – Jun 2022",
    responsibilities: [
      "針對疫情時公司疫調流程進行優化並開發疫調系統",
      "透過疫調系統，我們成功地縮短了回報風控單位所需的時間，至少節省了2小時",
      "使用技術前端:HTML,CSS,JavaScript與Bootstrap，後端:Java搭配Spring Boot資料庫:SQL Server"
    ]
  },
  {
    company: "富邦人壽資訊處重大專案部",
    position: "軟體測試實習生",
    period: "Jul 2020 - Feb 2021",
    responsibilities: [
      "了解金融保險產業界系統操作，如: AS400新保戶新增或修改",
      "建立不同種類別測試資料，如: 不同險種或不同的保戶年齡",
      "進行新舊系統測試與實作，找尋新舊系統的差異"
    ]
  }
];

// 專案作品數據
export const projectsData = [
  {
    title: "菓然有料 - 情緒辨識之水果茶飲推薦系統",
    period: "Feb 2021 – Feb 2022",
    description: "大學畢業專題，開發一個基於情緒辨識的水果茶飲推薦系統。",
    details: [
      "負責開發Line聊天機器人後端資料處理與提供使用者相符之回應",
      "負責處理Azure雲端平台使用，如:Azure Cosmos DB、Azure Face API、Azure DevOp等",
      "協助Web App 前端 React Native 程式撰寫",
      "協助專題文件之撰寫"
    ],
    technologies: ["Line Bot", "Azure", "React Native", "情緒辨識"]
  },
  {
    title: "東吳大學確診者自主回報系統",
    period: "2022",
    description: "非官方設立的系統，讓學生自主回報確診資訊並互相加油打氣。",
    details: [
      "台灣疫情再起，校內出現確診者越來越多，因無法快速從校內資訊得知確診者資訊，且受外校學生自主設計系統啟發，並將實習時所學技術再次運用，設立此系統讓學生自主回報並讓大家可在上面加油打氣",
      "使用技術前端:HTML、CSS、JavaScript與Bootstrap，後端:Java搭配Spring Boot資料庫:Azure SQL Database",
      "使用Azure App Service進行部署"
    ],
    technologies: ["Java", "HTML", "SQL", "Spring MVC", "Azure"]
  }
];

// 技能專長數據
export const skillsData = [
  {
    category: "後端與雲端技術",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Spring MVC", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Microsoft Azure", level: 80 }
    ]
  },
  {
    category: "軟技能",
    skills: [
      { name: "團隊合作", level: 95 },
      { name: "溝通能力", level: 90 },
      { name: "組織能力", level: 90 },
      { name: "問題解決能力", level: 85 }
    ]
  }
];

// 證照認證數據
export const certificationsData = [
  {
    title: "AZ-900",
    name: "Microsoft Azure AI Fundamentals",
    date: "2020.11",
    icon: "microsoft"
  },
  {
    title: "AI-900",
    name: "Microsoft Azure AI Fundamentals",
    date: "2021.08",
    icon: "microsoft"
  },
  {
    title: "ISO/IEC 27001:2022",
    name: "Lead Auditor (Information Security Management Systems)",
    date: "2023.08",
    icon: "shield"
  }
];

// 其他經歷數據
export const otherExperienceData = [
  {
    organization: "東吳大學社會資源處生涯發展中心",
    position: "義工活動組組長、義工團長",
    period: "Nov 2018 – Jun 2022",
    responsibilities: [
      "協助處理辦公室電腦網路設備問題",
      "協助辦公室老師交辦事項與辦理各大小活動"
    ]
  },
  {
    organization: "東吳大學資訊管理學系",
    position: "計算機程式設計/物件導向程式設計教學助理",
    period: "Nov 2019 - Jun 2021",
    responsibilities: [
      "協助專任助教在實習課演練時發生的問題，如: 學生設備、學生課程理解",
      "提供課堂學生課後輔導",
      "協助批改實習課作業與測驗試題"
    ]
  }
];
