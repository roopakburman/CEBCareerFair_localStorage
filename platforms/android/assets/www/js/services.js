angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Overview',
	lastText: 'Want to know more about us? Click here!',
    mainText: '<strong>CEB is a best practice insight and technology company.</strong> We have a unique view into what matters—and what works—when driving corporate performance. With more than 30 years of experience working with top companies to share, analyze, and apply proven practices, we deliver innovative solutions that help you unlock your full potential.	<br /><br />Every year we equip over 20,000 senior leaders from more than 10,000 organizations across 110 countries with the intelligence they need to respond quickly to evolving business conditions. In doing so we help them more effectively manage their talent, customers and operations to exceed business objectives.<br /><br />CEB stock trades on the New York Stock Exchange (NYSE: CEB).',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Products & Services',
    lastText: 'Thirty years ago, we realized that the most pressing challenges facing business leaders everywhere had often already been addressed — or were being solved — by other executives. That remains true today and is at the core of our business.',
    mainText: '<h3>Best Practices & Decision Support</h3> Thirty years ago, we realized that the most pressing challenges facing business leaders everywhere had often already been addressed — or were being solved — by other executives. That remains true today and is at the core of our business. <br /> <br />CEB offers more than 50 different memberships aligned to functional and key industry leadership roles. Our membership model is designed to deliver insights, tools, and advice that lead to transformative outcomes for your team and your company.<br /><br /><h3>Leadership Councils</h3>At the core of our membership programs are Leadership Councils through which we convene and provide support for decision makers in:<br /><br /><ul><li>Finance</li><li>Financial Services</li><li>Government</li><li>Human Resources</li><li>Information Technology</li><li>Innovation & Strategy</li><li>Risk & Audit</li><li>Marketing & Communications</li><li>Procurement & Operations</li><li>Sales & Service</li></ul>',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Business Model',
    lastText: 'CEB equips senior leaders and their teams with insight and actionable solutions to transform operations',
    mainText: 'CEB equips senior leaders and their teams with insight and actionable solutions to transform operations. This distinctive approach, pioneered by CEB, enables executives to harness peer perspectives and tap into breakthrough innovation without costly consulting or reinvention. The model works by:<br /><br />	<ul><li>Fostering a network of senior leaders in key functional roles;</li><li>Focusing on identifying their common challenges;</li><li>Using world-class research to identify and build on proven solutions accessible for mutual advantage; and,</li><li>Leveraging a global service infrastructure to deliver these insights, best practices, and tools.</li></ul>',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Mssion Values',
    lastText: 'We unlock the potential of organizations and leaders by advancing the science and practice of management.',
    mainText: '<h3>Mission and Values</h3> We unlock the potential of organizations and leaders by advancing the science and practice of management.<strong>Member Impact</strong> - We define ourselves by the achievements of those we serve and believe that advancement of member interest is the only route to our own success. We are effective stewards of members’ contributions and confidences, and we relentlessly innovate to delight our current and future members.<br /><br /><strong>Force of Ideas</strong> - We believe that great ideas—acute insights rooted in microeconomics and informed by human behavior—are essential to those accomplishments that change the fortunes of an individual, an organization, or the world. We discover and create these ideas and enable members and colleagues to act on them by delivering them in timely, targeted, and memorable ways.<br /><br /><strong>Spirit of Generosity</strong> - We forge relationships with our members and with each other that go beyond the merely commercial. Our businesses center on generous exchange, both between professional peers and between our staff and our members. We derive honest joy from the opportunity to serve our members, our colleagues, and our communities.<br /><br /><strong>Stewardship of Exceptional Talent</strong> - Our ambitions demand that we invest unusual effort in recruiting, developing, and managing exceptional talent from diverse backgrounds. We foster an entrepreneurial culture that enables outsized individual and team impact, grows businesses, and creates compelling careers. We set aspirational objectives, measure outcomes, reward outstanding accomplishments, and readily reinvent how we work.<br /><br />',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }, {
    id: 4,
    name: 'CEB in the Community',
    lastText: 'Firm values drive growth at CEB. As global community service is a cornerstone of the entire firms’ culture, the natural extension of the spirit of generosity is CEB in the Community.',
    mainText: 'Firm values drive growth at CEB. As global community service is a cornerstone of the entire firms’ culture, the natural extension of the spirit of generosity is CEB in the Community. Our aim is to bring the spirit of generosity to the communities in which we work and live.<br /><br />With a goal of an impactful global philanthropy program, we seek to partner with community service organizations that demonstrate alignment with our <strong>four firm</strong> values: Member Impact, the Spirit of Generosity, Force of Ideas, and Stewardship of Exceptional Talent. Our resources are directed so as to make our philanthropic partners even better at what they do and empower our employees to transform the communities they serve.',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
