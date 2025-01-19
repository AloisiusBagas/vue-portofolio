<template>
  <section id="resume" class="resume py-5 px-4">
    <div class="container" data-aos="fade-right">
      <h2 class="d-flex justify-content-center mb-2">My Resume</h2>

      <div class="row">
        <div class="col-lg-6">
          <h3 class="resume-title">Education</h3>
          <div v-for="(edu, index) in education" :key="index" class="resume-item">
            <h4>{{ edu.degree }}</h4>
            <h5>{{ edu.years }}</h5>
            <p>
              <em>{{ edu.institution }}</em>
            </p>
            <ul>
              <li v-for="(desc, idx) in edu.description" :key="idx">{{ desc }}</li>
            </ul>
          </div>
          <h3 class="resume-title">Informal Education</h3>
          <div v-for="(edu, index) in informalEducation" :key="index" class="resume-item">
            <h4>{{ edu.degree }}</h4>
            <h5>{{ edu.years }}</h5>
            <p>
              <em>{{ edu.institution }}</em>
            </p>
            <ul>
              <li v-for="(desc, idx) in edu.description" :key="idx">{{ desc }}</li>
            </ul>
          </div>
          <h3 class="resume-title">Organizational Experience</h3>
          <div v-for="(exp, index) in organizationalExperience" :key="index" class="resume-item">
            <h4>{{ exp.degree }}</h4>
            <h5>{{ exp.years }}</h5>
            <p>
              <em>{{ exp.institution }}</em>
            </p>
            <ul>
              <li v-for="(desc, idx) in exp.description" :key="idx">{{ desc }}</li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6">
          <h3 class="resume-title">Professional Experience</h3>
          <div v-for="(job, index) in experience" :key="index" class="resume-item">
            <h4>{{ job.title }}</h4>
            <h5>{{ job.years }}</h5>
            <p>
              <em>{{ job.company }}</em>
            </p>
            <ul>
              <li v-for="(task, idx) in job.tasks" :key="idx" v-html="task"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const education = ref([
  {
    degree: 'Bina Nusantara University',
    years: 'Sep 2017 - Feb 2021',
    institution: 'Kota Tangerang, Alam Sutera',
    description: [
      'Bachelor of Computer Science (Software Engineering)',
      'Cumulative GPA : 3.41/4.00'
    ]
  }
])

const informalEducation = ref([
  {
    degree: 'Participant of the IOS FoundationProgram',
    years: 'Jan 2018 - Feb 2018',
    institution: 'Kota Tangerang, Alam Sutera',
    description: [
      'Developed a prototype application to find and book food truck using Swift programming language'
    ]
  }
])

const organizationalExperience = ref([
  {
    degree: 'Manager of Brand Management Division BNEC',
    years: 'Jan 2019 - Jan 2020',
    institution: 'Bina Nusantara English Club',
    description: [
      'Managed and oversaw all media brand requirements, ensuring compliance with brand standards',
      'Collaborated with the Public Relations (PR) division to plan and strategize content and campaigns for effective implementation'
    ]
  },
  {
    degree: 'Staff of Brand Management Division BNEC',
    years: 'Jan 2018 - Jan 2019',
    institution: 'Bina Nusantara English Club',
    description: [
      'Produced compelling digital content for social and print media platforms and supported event design needs to enhance brand visibility.'
    ]
  }
])

const experience = ref([
  {
    title: 'Software Developer',
    years: 'Feb 2022 - Present',
    company: 'PT Adira Dinamika Multi Finance, Kota Jakarta Selatan',
    tasks: [
      'Developed the Workflow Marketing Proposal (WMP) application based on the Business Requirements Document (BRD) to support Adira and its dealer network, simplifying pricing and commission management workflows.<br><strong>Technology used: VueJS, Java</strong>.',
      'Developed the Ad1Survey application for mobile and web platforms, optimizing data collection and analysis processes to enhance efficiency in customer surveys.<br><strong>Technology used: Flutter</strong>.',
      'Maintained and improved a web-based video call survey application, enabling seamless video communication between customers and surveyors for accurate and efficient data collection.<br><strong>Technology used: Flutter, ReactJS, Twilio, Java</strong>.',
      'Provided support, maintenance, and improvements for various existing applications within Adira’s Loan Origination System, ensuring optimal functionality and performance.'
    ]
  },
  {
    title: 'Application Developer',
    years: 'Aug 2021 - Jan 2022',
    company: 'PT Mulipolar Technology, Tangerang, Banten',
    tasks: [
      'Developed an e-requisition application using Microsoft Power Platform to streamline review and processing, enabling requisitions to include comprehensive item details for improved efficiency.<br><strong>Technology used: Microsoft PowerApps, Power Automate, SharePoint list</strong>.',
      'Collaborated with senior staff in customer meetings to discuss project scope and objectives.',
      'Recommended and consulted with clients on the most appropriate graphic design',
      'delivered project results to stakeholders, ensuring alignment and transparency.'
    ]
  },
  {
    title: 'Full Stack Developer',
    years: 'Mar 2020 - Jul 2021',
    company: 'PT Accelist Lentera Indonesia,Tangerang Selatan, Banten',
    tasks: [
      'Promoted to Full-Stack Web Developer at PT Adicita Inovasi Teknologi; developed Confins software solutions for the financial services and multi-finance sectors.<br><strong>Technology used: .NET, AngularJS</strong>.',
      'Improved and maintained the iTalent e-learning app, achieving 10K+ downloads on Google Play and the Apple App Store.<br><strong>Technology used: Flutter, dotNET</strong>.'
    ]
  },
  {
    title: 'Marketing Team',
    years: 'jun 2019 - Jun 2020',
    company: 'Bina Nusantara University,Tangerang, Banten',
    tasks: [
      'Enhanced BINUS University’s image by actively supporting key events, including Edufair, Campus Tour, and MassProm',
      'Conducted marketing research to develop effective promotion and branding strategies.',
      'Created engaging content for social and print media content to establish and strengthen company branding.'
    ]
  }
])
</script>

<style scoped>
.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #3b434a;
}
.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #82909c;
  position: relative;
}
.resume .resume-item h4 {
  line-height: 18px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffb727;
  margin-bottom: 10px;
}
.resume .resume-item h5 {
  font-size: 16px;
  background: #eef0f2;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}
.resume .resume-item ul {
  padding-left: 20px;
}
.resume .resume-item ul li {
  padding-bottom: 10px;
}
.resume .resume-item:last-child {
  padding-bottom: 0;
}
.resume .resume-item::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid #82909c;
}
</style>
