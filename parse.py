from bs4 import BeautifulSoup

with open('page.html', 'r', encoding='UTF-8') as file:
  result = file.read()

soup = BeautifulSoup(result, 'lxml')

details = soup.find('div', id='tab-details')

div = details.find_all('div', class_='text-sluglist')[1]

countries = div.find('p').find_all('a')

for link in countries:
  print(link.text)
