__author__ = 'I317014'
#encoding = UTF-8
import time
import datetime


#闰年判断
def leapYear(year):
    year=int(year)
    if year%400== 0:
        return True
    if year%4==0 and year%100!=0:
        return True
    return False
#某年月日  天数总数
def NowNumDays(Y,M,D):
    num =int(D)
    M_str= str(M)
    M_int=int(M)



    month ={"01":31,
                "02":28,
                "03":31,
                "04":30,
                "05":31,
                "06":30,
                "07":31,
                "08":31,
                "09":30,
                "10":31,
                "11":30,
                "12":31,
                }
    for x in month:
        if  x<M_str:

             num += month[x]
        elif leapYear(Y)and M_int>2:
            num+=1


    return num


#活了多少天，不算今天
def DateOfBirth():
    date = input('请输入生日（如下格式:1900-01-02）')
    #输入日期
    a=datetime.datetime.strptime(date,'%Y-%m-%d')
    Uyear = a.year
    #转化为0开头的字符串
    Umonth = "0"+str(a.month)
    Uday = a.day

    UYn = int(Uyear)

    #当前日期
    FormatTime=time.localtime(time.time())
    Year = time.strftime('%Y',FormatTime)
    Month = time.strftime('%m',FormatTime)
    Day = time.strftime('%d',FormatTime)
    Yn=int(Year)

    #日期计算器 不算今天值为0
    cout1=0

    #出生年到当前年天数总数
    for n in range(UYn,Yn):
        if leapYear(n):
            cout1 += 366
        else:cout1+=365

    #删除第一年之前天数
    cout1 = cout1 -NowNumDays(Uyear,Umonth,Uday)


    #计算今年
    cout1 +=NowNumDays(Year,Month,Day)

    #输出
    print('今天是'+Year+'年'+Month+'月'+Day+'号')
    cout1 = str(cout1)
    print('今天是你人生中的第'+cout1+'天')
    a = "再见"
    return a



print(DateOfBirth())
