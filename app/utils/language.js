// Get user's language setting from localStorage
export const getUserLanguage = () => {
  try {
    const language = localStorage.getItem('itealab_language')
    if (language) {
      return language
    }
    
    // Fallback to browser language
    const browserLang = navigator.language.slice(0, 2)
    const supportedLangs = ['en', 'vi', 'ja']
    
    return supportedLangs.includes(browserLang) ? browserLang : 'en'
  } catch (err) {
    console.error('Failed to get language setting:', err)
    return 'en'
  }
}

// Set user's language preference
export const setUserLanguage = (language) => {
  try {
    localStorage.setItem('itealab_language', language)
    console.log(`🌐 Language set to: ${language}`)
    
    // Dispatch event for cross-component reactivity
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language } 
    }))
  } catch (err) {
    console.error('Failed to update language setting:', err)
  }
}

// Language configuration
export const languageConfig = {
  en: { name: 'English', flag: '🇺🇸', rtl: false },
  vi: { name: 'Tiếng Việt', flag: '🇻🇳', rtl: false },
  ja: { name: '日本語', flag: '🇯🇵', rtl: false }
}

// Complete translation dictionary
const translations = {
  en: {
    // Common
    'language': 'Language',
    'loading': 'Loading...',
    'error': 'Error',
    'success': 'Success',
    
    // Navigation
    'home': 'Home',
    'about': 'About',
    'what_we_do': 'What We Do',
    'how_we_work': 'How We Work',
    'how_our_team_work': 'How Our Team Work',
    'news': 'News',
    'join_us': 'Join Us',
    
    // Hero Section
    'welcome_title': 'Welcome to ITEALab',
    'welcome_subtitle': 'Innovation through Technology and Education',
    'welcome_description': 'We are a forward-thinking laboratory focused on advancing technology and education through innovative research and collaborative projects.',
    
    // About Section
    'about_title': 'About Us',
    'about_description': 'Learn more about our mission and vision',
    
    // What We Do Section
    'what_we_do_title': 'What We Do',
    'what_we_do_description': 'Discover our innovative projects and research',
    
    // How We Work Section
    'how_we_work_title': 'How Our Team Works',
    'how_we_work_description': 'Learn about our collaborative approach',
    
    // News Section
    'news_title': 'Latest News',
    'news_description': 'Stay updated with our latest developments',
    
    // Join Us Section
    'join_us_title': 'Join Us',
    'join_us_description': 'Become part of our innovative team',
    
    // Footer
    'contact_us': 'Contact Us',
    'follow_us': 'Follow Us',
    'all_rights_reserved': 'All rights reserved',
    
    // About Section Details
    'about_us': 'About US',
    'our_vision': 'Our VISION',
    'about_description_long': 'ITea Lab is a community built from a group of Computer Science students at Swinburne Vietnam, dedicated to cutting-edge research and development in technology.',
    'vision_description': 'To further expand the community and cultivate an inclusive space where Computer Science students can explore, research, and exchange knowledge, fostering connections among curious and passionate CS minds across all boundaries.',
    
    // Timeline
    'conception': 'Conception',
    'conception_desc': 'The idea of an association for CS students suggested by Ms.Pascale Quester',
    'it_student_association': 'IT Student Association',
    'it_student_desc': 'Formed and recruited Gen 1 in Feb 2024, focusing on doing projects. Represented Swinburne Vietnam CS at ACS accreditation',
    'swinburne_it_lab': 'Swinburne IT Lab',
    'swinburne_desc': 'Represented Swinburne Vietnam CS at ExDays and Conception Day. We participated in FPT ResFes 2024 and Akathon Jan 2024',
    'itea_lab_community': 'ITea Lab Community',
    'community_desc': 'Re-branded as CS community. Organised workshops and began recruiting Gen 2',
    'future_roadmap': 'Future Roadmap',
    'future_desc': 'Become semi-independent, collaborating with outside firms while representing CS students at Swinburne Vietnam',
    'present': 'Present',
    'early_2025': 'Early 2025',
    'early_2024': 'Early 2024',
    'our_journey': 'Our JOURNEY',
    'journey_description': 'From humble beginnings to a thriving community, explore our journey through the years.',
    
    // How Our Team Works Section
    'how_team_work_title': 'HOW OUR TEAM WORK',
    'how_team_work_description': 'At ITea Lab, we embrace challenges, diversity, and creativity in our work environment.',
    'research_driven': 'Research-Driven',
    'research_driven_desc': 'We balance academic rigor with practical applications, publishing our findings and contributing to open-source projects.',
    'agile_methodology': 'Agile Methodology',
    'agile_methodology_desc': 'We embrace iterative development, continuous feedback, and adaptive planning to deliver exceptional results.',
    'flexible_work': 'Flexible Work',
    'flexible_work_desc': 'We support remote work and flexible schedules, focusing on outcomes rather than hours spent at a desk.',
    'continuous_growth': 'Continuous Growth',
    'continuous_growth_desc': 'We invest in our team\'s development through conferences, courses, and dedicated learning time.',
    
    // What We Do Section
    'what_we_do_title': 'WHAT WE DO',
    'what_we_do_desc': 'We bring tech to life through hands-on workshops, meaningful community projects, and fun team activities that build real connections. It\'s not just about coding—it\'s about creating together, solving problems that matter, and having a blast while we do it.',
    'workshops': 'Workshops',
    'git_github_workshop': 'Git & GitHub Workshop',
    'amazon_q_workshop': 'Amazon Q Workshop',
    'docker_workshop': 'Docker Workshop',
    
    // Join Us Section
    'drop_us_line': 'DROP US A LINE',
    'introduce_yourself': 'Introduce yourself and your enthusiasm. We are eager to learn about your creative journey and the inspiration behind your work.',
    'your_name': 'Your name',
    'name_placeholder': 'Tell us what we should call you',
    'your_email': 'Your email',
    'email_placeholder': 'Your email',
    'your_message': 'Your message (optional)',
    'message_placeholder': 'Tell us about yourself and why you\'re interested',
    'add_ons': 'Add-Ons',
    'join_us_button': 'Join Us',
    'estimated_respond': 'Estimated respond time → within an hour',
    'or_email_us': 'or email us at',
    'web_development': 'Web Development',
    'mobile_apps': 'Mobile Apps',
    'cloud_computing': 'Cloud Computing',
    'data_science': 'Data Science',
    'devops': 'DevOps',
    'ui_ux_design': 'UI/UX Design',
    'machine_learning': 'Machine Learning',
    'cybersecurity': 'Cybersecurity',
    
    // News Section
    'itea_lab_news': 'ITEA LAB NEWS',
    'news_subtitle': 'Stay updated with the latest happenings at our community.',
    'news_title_1': 'ITea Lab Talents Build Chongluadao.vn AI Tool, Gain National Recognition',
    'news_title_2': 'ITea Lab Partners with 3DIoT for IoT and Software Development Collaboration',
    
    // Footer Section
    'footer_message': 'We build digital solutions that help communities navigate the tech landscape',
    'more_information': 'More information:',
    'solutions': 'Solutions',
    'ecosystem': 'Ecosystem',
    'company': 'Company',
    'our_community': 'Our Community',
    'events': 'Events',
    'tech_dive_2025': 'Tech Dive 2025',
    'vietnam_projects': 'Vietnam Projects',
    'academy': 'Academy',
    'documentation': 'Documentation',
    'media_kit': 'Media Kit',
    'roadmap_2025': 'Roadmap 2025',
    'company_brochure': 'Company Brochure',
    'itea_circles': 'ITea Circles',
    'our_team': 'Our Team',
    'get_involved': 'Get Involved',
    'copyright': 'Copyright ITea Lab 2025',
    'privacy_policy': 'Privacy Policy',
    'cookies_policy': 'Cookies Policy',
  },
  
  vi: {
    // Common
    'language': 'Ngôn ngữ',
    'loading': 'Đang tải...',
    'error': 'Lỗi',
    'success': 'Thành công',
    
    // Navigation
    'home': 'Trang chủ',
    'about': 'Giới thiệu',
    'what_we_do': 'Những gì chúng tôi làm',
    'how_we_work': 'Cách chúng tôi làm việc',
    'how_our_team_work': 'Cách đội ngũ chúng tôi làm việc',
    'news': 'Tin tức',
    'join_us': 'Tham gia với chúng tôi',
    
    // Hero Section
    'welcome_title': 'Chào mừng đến với ITEALab',
    'welcome_subtitle': 'Đổi mới thông qua Công nghệ và Giáo dục',
    'welcome_description': 'Chúng tôi là một phòng thí nghiệm tiến bộ tập trung vào việc phát triển công nghệ và giáo dục thông qua nghiên cứu đổi mới và các dự án hợp tác.',
    
    // About Section
    'about_title': 'Giới thiệu',
    'about_description': 'Tìm hiểu thêm về sứ mệnh và tầm nhìn của chúng tôi',
    
    // What We Do Section
    'what_we_do_title': 'Những gì chúng tôi làm',
    'what_we_do_description': 'Khám phá các dự án đổi mới và nghiên cứu của chúng tôi',
    
    // How We Work Section
    'how_we_work_title': 'Cách đội ngũ của chúng tôi làm việc',
    'how_we_work_description': 'Tìm hiểu về phương pháp hợp tác của chúng tôi',
    
    // News Section
    'news_title': 'Tin tức mới nhất',
    'news_description': 'Cập nhật những phát triển mới nhất của chúng tôi',
    
    // Join Us Section
    'join_us_title': 'Tham gia với chúng tôi',
    'join_us_description': 'Trở thành một phần của đội ngũ đổi mới của chúng tôi',
    
    // Footer
    'contact_us': 'Liên hệ với chúng tôi',
    'follow_us': 'Theo dõi chúng tôi',
    'all_rights_reserved': 'Tất cả quyền được bảo lưu',
    
    // About Section Details
    'about_us': 'Về chúng tôi',
    'our_vision': 'Tầm nhìn của chúng tôi',
    'about_description_long': 'ITea Lab là một cộng đồng được xây dựng từ một nhóm sinh viên Khoa học Máy tính tại Swinburne Vietnam, tận tâm với nghiên cứu và phát triển công nghệ tiên tiến.',
    'vision_description': 'Mở rộng cộng đồng và nuôi dưỡng một không gian bao trọn nơi sinh viên Khoa học Máy tính có thể khám phá, nghiên cứu và trao đổi kiến thức, thúc đẩy kết nối giữa những tâm hồn CS tò mò và đam mê.',
    
    // Timeline
    'conception': 'Khái niệm',
    'conception_desc': 'Ý tưởng về một hiệp hội dành cho sinh viên CS được đề xuất bởi cô Pascale Quester',
    'it_student_association': 'Hội sinh viên CNTT',
    'it_student_desc': 'Được thành lập và tuyển dụng Gen 1 vào tháng 2/2024, tập trung vào việc thực hiện các dự án. Đại diện cho CS tại Swinburne Vietnam trong việc công nhận ACS',
    'swinburne_it_lab': 'Phòng thí nghiệm CNTT Swinburne',
    'swinburne_desc': 'Đại diện CS Swinburne Vietnam tại ExDays và Ngày Khái niệm. Chúng tôi đã tham gia FPT ResFes 2024 và Akathon tháng 1/2024',
    'itea_lab_community': 'Cộng đồng ITea Lab',
    'community_desc': 'Đổi thương hiệu thành cộng đồng CS. Tổ chức workshop và bắt đầu tuyển dụng Gen 2',
    'future_roadmap': 'Lộ trình tương lai',
    'future_desc': 'Trở nên bán độc lập, hợp tác với các công ty bên ngoài trong khi đại diện cho sinh viên CS tại Swinburne Vietnam',
    'present': 'Hiện tại',
    'early_2025': 'Đầu năm 2025',
    'early_2024': 'Đầu năm 2024',
    'our_journey': 'HÀNH TRÌNH CỦA CHÚNG TÔI',
    'journey_description': 'Từ những khởi đầu khiêm tốn đến một cộng đồng thịnh vượng, khám phá hành trình của chúng tôi qua các năm.',
    
    // How Our Team Works Section
    'how_team_work_title': 'CÁCH ĐỘI NGŨ CHÚNG TÔI LÀM VIỆC',
    'how_team_work_description': 'Tại ITea Lab, chúng tôi chào đón thử thách, sự đa dạng và sáng tạo trong môi trường làm việc.',
    'research_driven': 'Dẫn dắt bởi Nghiên cứu',
    'research_driven_desc': 'Chúng tôi cân bằng giữa tính nghiêm túc học thuật với ứng dụng thực tế, xuất bản những phát hiện và đóng góp cho các dự án mã nguồn mở.',
    'agile_methodology': 'Phương pháp Agile',
    'agile_methodology_desc': 'Chúng tôi áp dụng phát triển lặp lại, phản hồi liên tục và lập kế hoạch thích ứng để mang lại kết quả xuất sắc.',
    'flexible_work': 'Làm việc Linh hoạt',
    'flexible_work_desc': 'Chúng tôi hỗ trợ làm việc từ xa và lịch trình linh hoạt, tập trung vào kết quả thay vì số giờ làm việc.',
    'continuous_growth': 'Phát triển Liên tục',
    'continuous_growth_desc': 'Chúng tôi đầu tư vào sự phát triển của đội ngũ thông qua hội nghị, khóa học và thời gian học tập chuyên biệt.',
    
    // What We Do Section
    'what_we_do_title': 'NHỮNG GÌ CHÚNG TÔI LÀM',
    'what_we_do_desc': 'Chúng tôi mang công nghệ đến với cuộc sống thông qua các workshop thực hành, dự án cộng đồng ý nghĩa và hoạt động nhóm vui vẻ tạo ra kết nối thực sự. Không chỉ về lập trình—mà về việc sáng tạo cùng nhau, giải quyết những vấn đề quan trọng và vui vẻ trong khi làm điều đó.',
    'workshops': 'Workshop',
    'git_github_workshop': 'Workshop Git & GitHub',
    'amazon_q_workshop': 'Workshop Amazon Q',
    'docker_workshop': 'Workshop Docker',
    
    // Join Us Section
    'drop_us_line': 'LIÊN HỆ VỚI CHÚNG TÔI',
    'introduce_yourself': 'Giới thiệu bản thân và sự nhiệt tình của bạn. Chúng tôi rất muốn tìm hiểu về hành trình sáng tạo của bạn và nguồn cảm hứng đằng sau công việc của bạn.',
    'your_name': 'Tên của bạn',
    'name_placeholder': 'Cho chúng tôi biết nên gọi bạn là gì',
    'your_email': 'Email của bạn',
    'email_placeholder': 'Email của bạn',
    'your_message': 'Tin nhắn của bạn (tùy chọn)',
    'message_placeholder': 'Hãy kể cho chúng tôi về bản thân bạn và tại sao bạn quan tâm',
    'add_ons': 'Kỹ năng bổ sung',
    'join_us_button': 'Tham gia với chúng tôi',
    'estimated_respond': 'Thời gian phản hồi dự kiến → trong vòng một giờ',
    'or_email_us': 'hoặc gửi email cho chúng tôi tại',
    'web_development': 'Phát triển Web',
    'mobile_apps': 'Ứng dụng di động',
    'cloud_computing': 'Điện toán đám mây',
    'data_science': 'Khoa học dữ liệu',
    'devops': 'DevOps',
    'ui_ux_design': 'Thiết kế UI/UX',
    'machine_learning': 'Học máy',
    'cybersecurity': 'An ninh mạng',
    
    // News Section
    'itea_lab_news': 'TIN TỨC ITEA LAB',
    'news_subtitle': 'Cập nhật những diễn biến mới nhất tại cộng đồng của chúng tôi.',
    'news_title_1': 'Tài năng ITea Lab xây dựng công cụ AI Chongluadao.vn, nhận được sự công nhận toàn quốc',
    'news_title_2': 'ITea Lab hợp tác với 3DIoT cho sự cộng tác phát triển IoT và phần mềm',
    
    // Footer Section
    'footer_message': 'Chúng tôi xây dựng các giải pháp kỹ thuật số giúp cộng đồng điều hướng bối cảnh công nghệ',
    'more_information': 'Thông tin thêm:',
    'solutions': 'Giải pháp',
    'ecosystem': 'Hệ sinh thái',
    'company': 'Công ty',
    'our_community': 'Cộng đồng của chúng tôi',
    'events': 'Sự kiện',
    'tech_dive_2025': 'Tech Dive 2025',
    'vietnam_projects': 'Dự án Việt Nam',
    'academy': 'Học viện',
    'documentation': 'Tài liệu',
    'media_kit': 'Bộ công cụ truyền thông',
    'roadmap_2025': 'Lộ trình 2025',
    'company_brochure': 'Tờ rơi công ty',
    'itea_circles': 'ITea Circles',
    'our_team': 'Đội ngũ của chúng tôi',
    'get_involved': 'Tham gia',
    'copyright': 'Bản quyền ITea Lab 2025',
    'privacy_policy': 'Chính sách bảo mật',
    'cookies_policy': 'Chính sách Cookie',
  },
  
  ja: {
    // Common
    'language': '言語',
    'loading': '読み込み中...',
    'error': 'エラー',
    'success': '成功',
    
    // Navigation
    'home': 'ホーム',
    'about': '私たちについて',
    'what_we_do': '私たちの取り組み',
    'how_we_work': '私たちの働き方',
    'how_our_team_work': '私たちのチームの働き方',
    'news': 'ニュース',
    'join_us': '参加する',
    
    // Hero Section
    'welcome_title': 'ITEALabへようこそ',
    'welcome_subtitle': '技術と教育を通じたイノベーション',
    'welcome_description': '私たちは革新的な研究と協力的なプロジェクトを通じて技術と教育の発展に焦点を当てた先進的な研究室です。',
    
    // About Section
    'about_title': '私たちについて',
    'about_description': '私たちの使命とビジョンについて詳しく学ぶ',
    
    // What We Do Section
    'what_we_do_title': '私たちの取り組み',
    'what_we_do_description': '私たちの革新的なプロジェクトと研究を発見する',
    
    // How We Work Section
    'how_we_work_title': '私たちチームの働き方',
    'how_we_work_description': '私たちの協力的なアプローチについて学ぶ',
    
    // News Section
    'news_title': '最新ニュース',
    'news_description': '私たちの最新の開発について最新情報を入手',
    
    // Join Us Section
    'join_us_title': '参加する',
    'join_us_description': '私たちの革新的なチームの一員になる',
    
    // Footer
    'contact_us': 'お問い合わせ',
    'follow_us': 'フォローする',
    'all_rights_reserved': '全権利保持',
    
    // About Section Details
    'about_us': '私たちについて',
    'our_vision': '私たちのビジョン',
    'about_description_long': 'ITea Labは、Swinburne Vietnamのコンピューターサイエンス学生のグループから構築されたコミュニティで、テクノロジーの最先端研究と開発に専念しています。',
    'vision_description': 'コミュニティをさらに拡大し、コンピューターサイエンス学生が探求、研究、知識交換できる包括的な空間を育成し、すべての境界を越えて好奇心旺盛で情熱的なCS心同士のつながりを促進します。',
    
    // Timeline
    'conception': 'コンセプション',
    'conception_desc': 'CS学生向け協会のアイデアをMs.Pascale Questerが提案',
    'it_student_association': 'IT学生協会',
    'it_student_desc': '2024年2月にGen 1を形成し採用、プロジェクトに焦点を当てる。Swinburne Vietnam CSをACS認定で代表',
    'swinburne_it_lab': 'Swinburne ITラボ',
    'swinburne_desc': 'ExDaysとConception DayでSwinburne Vietnam CSを代表。FPT ResFes 2024とAkathon 2024年1月に参加',
    'itea_lab_community': 'ITea Labコミュニティ',
    'community_desc': 'CSコミュニティとしてリブランド。ワークショップを開催し、Gen 2の採用を開始',
    'future_roadmap': '将来のロードマップ',
    'future_desc': '半独立となり、Swinburne VietnamのCS学生を代表しながら外部企業と協力',
    'present': '現在',
    'early_2025': '2025年初頭',
    'early_2024': '2024年初頭',
    'our_journey': '私たちの旅路',
    'journey_description': 'ささやかな始まりから繁栄するコミュニティまで、私たちの長年の旅路を探求してください。',
    
    // How Our Team Works Section
    'how_team_work_title': '私たちのチームの働き方',
    'how_team_work_description': 'ITea Labでは、職場環境において挑戦、多様性、創造性を受け入れています。',
    'research_driven': '研究主導',
    'research_driven_desc': '学術的な厳密さと実用的な応用のバランスを取り、発見を公表し、オープンソースプロジェクトに貢献しています。',
    'agile_methodology': 'アジャイル手法',
    'agile_methodology_desc': '反復的な開発、継続的なフィードバック、適応的な計画を採用し、優れた結果を提供します。',
    'flexible_work': 'フレキシブルワーク',
    'flexible_work_desc': 'リモートワークや柔軟なスケジュールをサポートし、机での時間よりも成果に焦点を当てています。',
    'continuous_growth': '継続的成長',
    'continuous_growth_desc': '会議、コース、専用の学習時間を通じてチームの開発に投資しています。',
    
    // What We Do Section
    'what_we_do_title': '私たちの取り組み',
    'what_we_do_desc': '私たちは実践的なワークショップ、意義のあるコミュニティプロジェクト、本当のつながりを築く楽しいチーム活動を通じて技術に命を吹き込んでいます。単にコーディングするだけでなく、一緒に創造し、重要な問題を解決し、楽しみながら行うことです。',
    'workshops': 'ワークショップ',
    'git_github_workshop': 'Git & GitHubワークショップ',
    'amazon_q_workshop': 'Amazon Qワークショップ',
    'docker_workshop': 'Dockerワークショップ',
    
    // Join Us Section
    'drop_us_line': 'お気軽にご連絡ください',
    'introduce_yourself': 'あなた自身とあなたの情熱を紹介してください。あなたの創造的な旅路と作品の背景にあるインスピレーションについて学ぶことを楽しみにしています。',
    'your_name': 'お名前',
    'name_placeholder': 'どのようにお呼びすればよいか教えてください',
    'your_email': 'メールアドレス',
    'email_placeholder': 'メールアドレス',
    'your_message': 'メッセージ（任意）',
    'message_placeholder': 'あなた自身と興味を持った理由について教えてください',
    'add_ons': 'アドオン',
    'join_us_button': '参加する',
    'estimated_respond': '推定返答時間 → 1時間以内',
    'or_email_us': 'またはメールでお問い合わせください',
    'web_development': 'ウェブ開発',
    'mobile_apps': 'モバイルアプリ',
    'cloud_computing': 'クラウドコンピューティング',
    'data_science': 'データサイエンス',
    'devops': 'DevOps',
    'ui_ux_design': 'UI/UXデザイン',
    'machine_learning': '機械学習',
    'cybersecurity': 'サイバーセキュリティ',
    
    // News Section
    'itea_lab_news': 'ITEA LABニュース',
    'news_subtitle': 'コミュニティの最新の出来事をお知らせします。',
    'news_title_1': 'ITea Labの才能がChongluadao.vn AIツールを構築し、全国的な認知を獲得',
    'news_title_2': 'ITea LabがIoTとソフトウェア開発の協力で3DIoTとパートナーシップ',
    
    // Footer Section
    'footer_message': 'コミュニティがテクノロジーの景観をナビゲートするのを支援するデジタルソリューションを構築しています',
    'more_information': '詳細情報：',
    'solutions': 'ソリューション',
    'ecosystem': 'エコシステム',
    'company': '会社',
    'our_community': '私たちのコミュニティ',
    'events': 'イベント',
    'tech_dive_2025': 'Tech Dive 2025',
    'vietnam_projects': 'ベトナムプロジェクト',
    'academy': 'アカデミー',
    'documentation': 'ドキュメンテーション',
    'media_kit': 'メディアキット',
    'roadmap_2025': 'ロードマップ2025',
    'company_brochure': '会社パンフレット',
    'itea_circles': 'ITea Circles',
    'our_team': '私たちのチーム',
    'get_involved': '参加する',
    'copyright': 'Copyright ITea Lab 2025',
    'privacy_policy': 'プライバシーポリシー',
    'cookies_policy': 'クッキーポリシー',
  }
}

// Get translation for a key
export const t = (key, params = {}) => {
  const language = getUserLanguage()
  const translation = translations[language]?.[key] || translations.en[key] || key
  
  // Simple parameter replacement for dynamic content
  if (params && Object.keys(params).length > 0) {
    return translation.replace(/\{(\w+)\}/g, (match, param) => {
      return params[param] || match
    })
  }
  
  return translation
}

// Get language info
export const getLanguageInfo = (targetLanguage = null) => {
  const language = targetLanguage || getUserLanguage()
  return languageConfig[language] || languageConfig.en
}

// Initialize language system
export const initializeLanguage = async () => {
  if (typeof window === 'undefined') return // Skip on server-side
  
  const userLanguage = getUserLanguage()
  console.log(`🌐 Initializing language system with: ${userLanguage}`)
  
  // Set document language for accessibility
  document.documentElement.lang = userLanguage
  
  // Set text direction (none of our current languages are RTL)
  const langInfo = getLanguageInfo(userLanguage)
  document.documentElement.dir = langInfo.rtl ? 'rtl' : 'ltr'
}