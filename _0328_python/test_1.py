from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait as wait
from selenium.webdriver.common.keys import Keys

# Chrome driver 자동 업데이트
from webdriver_manager.chrome import ChromeDriverManager

# 브라우저 꺼짐 방지
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

# Chrome driver Manager를 통해 크롬 드라이버 자동 설치 > 최신 버전을 설치 > Service에 저장
service = Service(excutable_path=ChromeDriverManager().install()) 
driver = webdriver.Chrome(service=service, options = chrome_options)
driver.implicitly_wait(2)

# 티스토리 접속
driver.get('https://www.tistory.com/')

# 계정 로그인 버튼 클릭
driver.find_element_by_xpath('//*[@id="kakaoHead"]/div/div[3]/div/a').click()
driver.find_element_by_xpath('//*[@id="cMain"]/div/div/div/a[1]/span[2]').click()
time.sleep(1)

# 로그인
username=driver.find_element_by_xpath('//*[@id="id_email_2"]')
username.send_keys('카카오톡 이메일')

password=driver.find_element_by_xpath('//*[@id="id_password_3"]')
password.send_keys('비밀번호')

time.sleep(1)
driver.find_element_by_xpath('//*[@id="login-form"]/fieldset/div[8]/button[1]').click()
