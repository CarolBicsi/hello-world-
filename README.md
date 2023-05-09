# hello-world-
//////第2关：不使用第3个变量，实现两个数的对调
////#include<stdio.h>
////int main(void)
////{  
////	
////	int a,b;
////	scanf("%d%d",&a,&b); 
////	printf("a=%d b=%d\n",a,b);
////	a=a-b;
////	b=a+b;
////	a=b-a;
////	printf("a=%d  b=%d\n",a,b);
////	return 0;
////}
//
////第3关：用宏定义常量
//#include<stdio.h>
//int main(void)
//{  
//	/*********Begin*********/
//	int x;
//	scanf("%d",&x);
//	printf("%d",30*x);
//	
//	/*********End**********/ 
//	return 0;
//}
////
//
//第4关：数字分离
//任务描述
//输入一个三位数，分别求出x的各位数字，十位数字，百位数字的值。
//#include<stdio.h>
//int main(void)
//{  
//	/*********Begin*********/
//	int x;
//	scanf("%d",&x);
//	printf("%d ",x/100);
//	printf("%d ",(x/10)%10);
//	printf("%d",x%10);
//	
//	/*********End**********/ 
//	return 0;
//}
//
//第5关：计算总成绩和平均成绩
//#include<stdio.h>
//int main(void)
//{  
//	/*********Begin*********/
//	int a,b,c,d,e,sum;
//	scanf("%d %d %d %d %d",&a,&b,&c,&d,&e);
//	sum=(a+b+c+d+e);
//	printf("%d ",sum);
//	printf("%.2f",(double)sum/5);
//	
//	/*********End**********/ 
//	return 0;
//}
//
//第6关：求三角形的面积
//#include<stdio.h>
//#include <math.h>
//int main(void)
//{  
//	/*********Begin*********/
//	float area,x,y,z,s; 
//	
//	scanf("%f %f %f",&x,&y,&z);
//	
//	s = (x+y+z)/2;
//	area =sqrt(s*(s-x)*(s-y)*(s-z));
//	
//	printf("%.3f",area);
//	/*********End**********/ 
//	return 0;
//}
//
//第7关：立体几何计算题
//任务描述
//本关任务：设圆半径r，圆柱高h ， 求圆周长C1，半径为r的圆球表面积Sb,圆半径r，圆柱高为h的圆柱体积Vb。 用scanf输入数据，输出计算结果，输出时取小数点后两位数字。请编程序。 PI＝3.14
//#include<stdio.h>
//#include <math.h>
//int main()
//{  
//	/*********Begin*********/
//#define PI 3.14
//	double r,h,C1,Sb,Vb;
//	scanf("%lf,%lf",&r,&h);
//	
//	C1= 2*PI*r;
//	Sb= 4*PI*r*r;
//	Vb= PI*r*r*h;
//	printf("C1=%.2f\nSb=%.2f\nVb=%.2f\n",C1,Sb,Vb);
//	/*********End**********/ 
//	return 0;
//}
//
//第8关：计算两个正整数的最大公约数
//#include<stdio.h>
//int MaxCommonFactor( int a, int b)
//{ 
//	int c; 
//	if(a<=0||b<=0) 
//		return -1; 
//	while(b!=0)
//	{ 
//		c=a%b; 
//		a=b;
//		b=c;
//	} 
//	return a; 
//}   
//int main(void)
//{  
//	/*********Begin*********/
//	int a,b;
//	scanf("%d,%d",&a,&b);
//	printf("%d\n",MaxCommonFactor(a,b));
//	
//	/*********End**********/ 
//	return 0;
//}
//
//第1关：排序
//任务描述
//本关任务：下面的程序是从键盘输入三个整数按从小到大的顺序输出。
//#include<stdio.h>
//int main()
//{  
//	int a,b,c,t;
//	printf("请输入三个整数:");
//	scanf("%d%d%d",&a,&b,&c);
//	if(a>b)
//	{
//		t=a;
//		a=b;
//		b=t;
//	}
//	if(a>c)
//	{
//		t=a;
//		a=c;
//		c=t;
//	}
//	if(b>c)
//	{
//		t=b;
//		b=c;
//		c=t;
//	}
//	printf("从小到大排列为:%d,%d,%d",a,b,c);
//	return 0;
//}
//
//第2关：选择结构-闰年判断
//#include<stdio.h>
//int main(void)
//{  
//	/*********Begin*********/
//	int a;
//	scanf("%d",&a);
//	if(a%400==0){
//		printf("%d 是闰年！",a);
//	}else{
//		printf("%d 不是闰年！",a);
//	}
//	/*if(a%100==0){
//	  printf("%d不是闰年！",a);
//	  }else{
//	  if(a%4==0){
//	  printf("%d是闰年！",a);
//	  }else{
//	  printf("%d不是闰年！",a);
//	  }
//	  }*/
//	
//	/*********End**********/ 
//	return 0;
//}
//
//第3关：选择结构-分段函数问题
//#include <stdio.h>
//
//int main(void) {
//	float x;
//	float y;
//	scanf("%f", &x);
//	if (x < 0 && x != -3)
//	{
//		y = (x * x + x - 6);
//		printf("%.3f", y);
//		return 0;
//	}
//	
//	if (x >= 0 && x <= 10 && x != 2 && x != 3)
//		y = (x * x - 5 * x + 6);
//	else
//		y = (x * x - x - 1);
//	printf("%.3f", y);
//	return 0;
//	
//	
//}
//
//第4关：学生成绩等级换算
//#include<stdio.h>
//#include<math.h>
//int main(void)
//{  
//	float result;
//	int x;
//	scanf("%f",&result);
//	if(result>=0&&result<=100){
//		x=result/10;
//		switch(x)
//{
//	case 10:printf("A");break;
//	case 9:printf("A");break;
//	case 8:printf("B");break;
//	case 7:printf("C");break;
//	case 6:printf("D");break;
//	default:printf("E");
//}
//	}else
//		printf("Score is error!");
//	return 0;
//}
//
//第1关：小球自由落体运动
//#include<stdio.h>
//int main()
//{  
//	int N;
//	float M,Jump,sum;
//	scanf("%f%d",&M,&N);
//	sum=M;
//	if(N==1)
//	{
//		Jump=M/2.0;
//	}
//	
//	else
//	{
//		for(int i=0;i<N;i++)
//		{
//			M=M/2;
//			Jump=M;
//			sum+=2*M;
//		}
//	}
//	sum -= 2*M;
//	printf("%.2f %.2f",Jump,sum);
//	return 0;
//}
//
//
//第2关：求解出n以内所有能被5整除的正整数的乘积
//#include<stdio.h>
//int main(void)
//{  
//	/*********Begin*********/
//	int n,i,s=1;
//	scanf("%d",&n);
//	for(i=1;i<=n;i++)
//	{
//		if(i%5==0)
//			s=s*i;
//	}
//	printf("%d\n", s);
//	
//	/*********End**********/ 
//	return 0;
//}
//
//第3关：最大公约数和最小公倍数
//#include<stdio.h>
//int main(void)
//{  
//	/*********Begin*********/
//	int m,n,max,min,b,c;
//	scanf("%d%d",&m,&n);
//	c=m%n;
//	b=m*n;
//	while(c!=0)
//	{
//		m=n;
//		n=c;
//		c=m%n;
//	}
//	max=n;
//	min=b/max;
//	printf("最大公约数是:%d\n最小公倍数是:%d\n",max,min);
//	return 0;
//	
//	/*********End**********/ 
//	return 0;
//}
//
//第4关：字符串中各类字符数的统计
//#include<stdio.h>
//int main(void)
//{  
//	/*********Begin*********/
//	int letters=0,num=0,space=0,others=0;
//	char ch;
//	while((ch=getchar())!='\n')
//	{
//		if(ch>='a'&&ch<='z')
//			letters++;
//		else if(ch>='1'&&ch<='9')
//			num++;
//		else if(ch==' ')
//			space++;
//		else
//			others++;
//	}
//	printf("%d %d %d %d",letters,num,space,others);
//	/*********End**********/ 
//	return 0;
//}
//
//第5关：求sn=a+aa+aaa+aaaa+......的值
//#include<stdio.h>
//#include<math.h>
//int main(void)
//{  
//	/*********Begin*********/
//	int x,n,i,su=0,sum=0;
//	scanf("%d %d",&x,&n);
//	for(i=0;i<n;i++)
//	{
//		su=x*pow(10,i)+su;
//		sum=sum+su;
//	}
//	printf("%d",sum);
//	
//	
//	/*********End**********/ 
//	return 0;
//}
//
//
//第1关：C循环-求平均成绩
//#include<stdio.h>
//int main(void)
//{  
//	/*********Begin*********/
//	int number;
//	int i;
//	float sum=0,score;
//	printf("the number of students:");
//	scanf("%d",&number);
//	if(number <= 0)
//	{
//		printf("the scores:average=0.00");
//	} else
//	{
//		printf("the scores:");
//		for(i= 0; i<number ;i++)
//		{
//			scanf("%f",&score);
//			sum += score;
//		}
//		printf("average=%.2f",sum / number);	
//	}
//	/*********End**********/ 
//	return 0;
//}
//
//C循环-求各位数字之积
//#include <stdio.h>
//int main()
//{
//	int num;
//	int s=1;
//	scanf("%d",&num);
//	while(num>0)
//	{
//		s=s*(num%10);
//		num=num/10;
//	}
//	printf("%d",s);
//}
//
//第3关：C循环-求阶乘之和
//#include<stdio.h>
//int main()
//{
//	int a;
//	int num,n;
//	while(~scanf("%d",&n)){
//		num=0;
//		for(int i=1;i<=n;i++){
//			a=1;
//			for(int j=1;j<=i;j++){
//				a*=j;
//			}
//			num+=a;
//		}
//		printf("%d",num);
//	} 
//	return 0;
//}
//
//第4关：C循环-水仙花数
所谓水仙花数是指一个三位数，其各位数字的立方和等于该数字本身。比如153是一个水仙花数，因为153=1^3+5^3+3^3
#include <stdio.h>
#include <math.h>
int main()
{
	int omit,i;
	scanf("%d",&omit);
	for(i=100;i>99 && i<1000;i++)
	{
		int temp1,temp2,temp3,temp_result;
		temp1 = i%10;
		temp2 = i/10%10;
		temp3 = i/100;
		temp_result = pow(temp1,3)+pow(temp2,3)+pow(temp3,3);
		if(temp_result == i)
		{
			printf("%d ",i);
		}
	}
	return 0;
}

第5关：C循环-寻找完数
本关任务：一个数如果恰好等于它的因子之和，这个数就称为"完数"。 例如，6的因子为1、2、3，而6=1+2+3，因此6是"完数"。 编程序找出1000之内的所有完数。
#include <stdio.h>
int main()
{
	int i,j,x,y;
	for(i=1;i<1000;i++)
	{
		x=0;
		y=0;
		for(j=1;j<i;j++)
		{
			if(i%j==0)
			{
				x=x+j;
			}
		}
		if(x==i)
		{
			printf("%d",x);
			printf("\n");
		}
	}
	return 0;
}


第6关：分数求和
#include<stdio.h>
#include<math.h>
int main()
{
	int b=1;
	float sum=0,c,a=1,n=1;
	while(b<=100)
	{
		c=n*a/b;
		sum=sum+c;
		b++;
		n=-n;
	}
	printf("%.3f",sum);
}

第1关：快递费用计算
#include <stdio.h>
#include <math.h> 
int main()
{
	int area;
	float weight,price = 0;
	scanf("%d,%f",&area,&weight);
	if(area<0||area>4)
	{
		printf("Error in Area\n");
	}
	else if(area==0)
	{
		if(weight<1)
		{
			price=10;
		}
		else
		{
			weight = ceil(weight);
			price = 10 + (weight-1)*3;
		}
	}
	else if(area==1)
	{
		if(weight<1)
		{
			price=10;
		}
		else
		{
			weight = ceil(weight);
			price = 10 + (weight-1)*4;
		}
	}
	else
	{
		if(weight<1)
		{
			price=15;
		}
		else
		{
			if(area==2)
			{
				weight=ceil(weight);
				price=15+(weight-1)*5;
			}
			else if(area==3)
			{
				weight=ceil(weight);
				price=15+(weight-1)*6.5;
			}
			else
			{
				weight = ceil(weight);
				price = 15 + (weight-1)*10;
			}
		}
	}
	printf("Price: %.2f\n",price);
	return 0;
}

第2关：计算一元二次方程的根
#include<stdio.h>
#include<math.h>
int main(void)
{  
	/*********Begin*********/
	float a,b,c,x1,x2;
	printf("Please enter the coefficients a,b,c:\n");
	scanf("%f,%f,%f",&a,&b,&c);
	double e=(b*b-(4*a*c));
	if(e<0){
		printf("error!\n");
	}
	else{
		x1=-b/(2*a)+sqrt((b*b)-(4*a*c))/(2*a);
		x2=-b/(2*a)-sqrt((b*b)-(4*a*c))/(2*a);
		printf("x1=%.4f, x2=%.4f\n",x1,x2);
	}
	
	/*********End**********/ 
	return 0;
}

第3关：产品信息格式化
#include<stdio.h>
int main(void)
{  int num,date[3];
	float price;
	printf("Enter item number:\n");
	scanf("%d",&num);
	printf("Enter unit price:\n");
	scanf("%f",&price);
	printf("Enter purchase date (mm/dd/yy):\n");
	printf("Item Unit Purchase\n");
	scanf("%d/%d/%d",&date[0],&date[1],&date[2]);
	printf("%-9d$ %-9.2f%02d%02d%02d",num,price,date[0],date[1],date[2]);
	return 0;
}

输入两个正整数 m 和 n，求其最大公约数和最小公倍数。
求最小公倍数算法：

最小公倍数 = 两整数的乘积 ÷ 最大公约数

根据求最小公倍数的算法，可以看出如果已知最大公约数，就能很容易求出最小公倍数。而通过辗转相除法和相减法，可以求得最大公约数，下面分别进行介绍。

辗转相除法
已知有两整数m和n，利用辗转相除法求它们的最大公约数，具体步骤如下：
① m%n得余数t；
② 若t=0，则n即为两数的最大公约数；
③ 若t≠0，则m=n，n=t，再回去执行①。
#include<stdio.h>
int main(void)
{  
	/*********Begin*********/
	int m,n,max,min,b,c;
	scanf("%d%d",&m,&n);
	c=m%n;
	b=m*n;
	while(c!=0)
	{
		m=n;
		n=c;
		c=m%n;
	}
	max=n;
	min=b/max;
	printf("最大公约数是:%d\n最小公倍数是:%d\n",max,min);
	return 0;
	
	/*********End**********/ 
	return 0;
}


用do-while循环按公式e=1+1/1!+1/2!+1/3!+…
#include <stdio.h>
int main()
{
	/********** Begin **********/
	float s;
	int i=1;
	float sum=1;
	float t=1;
	scanf("%f",&s);
	do{
		t=t*i;
		sum+=(1.0/t);
		i++;
	}
	while((1.0/t)>=s);
	printf("i=%d\ne=%f",i,sum);
	
	/********** End **********/
	return 0;
}


用for循环求sn=a+aa+aaa+aaaa+......的值
#include<stdio.h>
#include<math.h>
int main()
{
	int m,n,sum=0,h=1,l=0;
	double i;
	scanf("%d%d",&m,&n);
	for(;n>0;n--)
	{
		sum=0;
		for(i=0;i<n;i++)
		{
			h=pow(10,i)*m;
			l=l+h;
		}
		sum=sum+l;
	}
	printf("%d",sum);
}

第1关：求和
#include <stdio.h>
int main(){
	int x,sum=0;
	scanf("%d",&x);
	for(int i=0;i<=x;i++){
		sum=sum+i;
	}
	printf("%d",sum);
}

第2关：回文数计算
#include "stdio.h"


int main() {
	/*********Begin*********/
	int i=1258,a,b,c,d;
	for(i=200; i<=3000; i++) {
		a=i/1000;
		b=(i-a*1000)/100;
		c=((i-a*1000)-b*100)/10;
		d=i%10;
		if(i<1000 && b==d)
			printf("%d\n",i);
		if( i>=1000 && a==d && b==c)
			printf("%d\n",i);
	}
	/*********End**********/
}

第3关： 编写函数求表达式的值
题目描述:有如下表达式 s = 1 + 1 / 3 + (1 * 2) / (3 * 5) + (1 * 2 * 3) / (3 * 5 * 7) + .... + (1 * 2 * 3 * .... * n) / (3 * 5 * 7 * ... * (2 * n + 1))。
#include "stdio.h"
/*********Begin*********/
int function(int n);
//function函数
int function(int n) {
	double a=1,b=1,i;
	double s=0;
	for(i=0; i<=n; i++) {
		if(i==0 || i==1) a=1;
		else a=a*i;
		b=b*(2*i+1);
		s+=(double)a/b;
	}
	printf("%.10lf\n",s);
}

/*********End**********/
int main(void) {
	/*********Begin*********/
	int n;
	scanf("%d",&n);
	function(n);
	/*********End**********/
	return 0;
}


第4关：阶乘数列
题目描述:求Sn=1!+2!+3!+4!+5!+…+n!之值，其中n是一个数字
#include<stdio.h>
long long solve(long long n){
	/*********Begin*********/
	if(n<=1)
		return 1;
	return(n*solve(n-1));
	
	/*********End**********/
}
int main(void)
{
	long long n;
	scanf("%lld",&n);
	long long ans=0;
	for(long long i=1;i<=n;i++)
		ans+=solve(i);
	printf("%lld", ans);
	return 0;
}

第5关：亲密数
题目描述:两个不同的自然数A和B，如果整数A的全部因子(包括1，不包括A本身)之和等于B；且整数B的全部因子(包括1，不包括B本身)之和等于A，则将整数A和B称为亲密数。求3000以内的全部亲密数。

相关知识（略）
#include <stdio.h>
int main()
{
	int a, i, b, n;
	for (a = 1; a < 3000; a++)
	{   
		for (b = 0, i = 1; i <= a / 2; i++ )
		{
			if(! (a % i)) 
				b += i; 
		}
		for (n = 0, i = 1; i <= b/2; i++)
		{
			if(! (b % i)) 
				n += i;
		}
		if(n == a && a < b)
			printf("(%d,%d)", a, b); 
	}   
	return 0;
}

第6关：公约公倍数
#include<stdio.h>
int main()
{
	int max(int m,int n);//最大公约数的自定义函数
	long long int min(long long int m,long long int n,long long int j);//最小公约数的自定义函数
	int x,y,b;
	long long int c;
	scanf("%d %d",&x,&y);
	if(x>0&&y>0)
	{
		b=max(x,y);
		c=min(x,y,b);
		printf("%d %lld",b,c);
	}
	else
		printf("Input Error");
}
int max(int m,int n)
{
	int i;
	if(m>=n)
		i=n;
	else
		i=m;
	for(;i>0;i--)
	{
		if(m%i==0&&n%i==0)
		{
			return i;
			break;	
		}
	}
}
long long int min(long long int m,long long int n,long long int j)
{
	long long int k;
	k=m*n/j;
	return k;
}

第1关：递归求阶乘数列
#include<stdio.h>
long long solve(long long n){
	/*********Begin*********/
	long long sum=1;
	for(long long j=1;j<=n;j++){
		sum=sum*j;
	}
	return sum;
	/*********End**********/
}
int main(void)
{
	long long n;
	scanf("%lld",&n);
	long long ans=0;
	for(long long i=1;i<=n;i++)
		ans+=solve(i);
	printf("%lld", ans);
	return 0;
}

第2关：递归实现输出一个整数的逆序
#include<stdio.h>
void solve(int n)
{
	printf("%d", n%10);
	/*********Begin*********/
	n=n/10;
	/*********End**********/
	if(n>0) solve(n);
}
int main()
{
	int n;
	scanf("%d",&n);
	solve(n);
	return 0;
}

第3关：将整数递归转换成字符串
#include <stdio.h>
void solve(int n)
{
	int temp=n%10;
	int ds;
	n/=10;
	if(n)
		solve(n);
	ds=temp;
	if(n)
		printf(" %d",ds);
	
	else
		printf("%d",ds);
}
int main()
{
	int n;
	scanf("%d",&n);
	solve(n);
	return 0;
}

第4关：递归实现Ackman函数
编写一函数实现下列Ackman函数，其中m，n为正整数
//
// Acm(m,n)=  
//⎩
//⎪
//⎪
//⎨
//⎪
//⎪
//⎧
//​
//
//n+1
//Acm(m−1,1)
//Acm(m−1,Acm(m,n−1))
//​
//
// if m=0,n>0
//	 if n=0,m>0
//		 if n>0,m>0
//			​
//			
//			

#include<stdio.h>
int Acm(int m,int n)
{
	int x;
	if(m==0&&n>0)
		/*********Begin*********/
		x=n+1;
	/*********End**********/
	else if(n==0&&m>0)
		/*********Begin*********/
		x=Acm( m-1, 1);
	/*********End**********/
	else
		/*********Begin*********/
		x=Acm( m-1, Acm( m,n-1));
	/*********End**********/
}
int main(void)
{
	int m,n;
	scanf("%d%d",&m,&n);
	printf("%d", Acm(m,n));
	return 0;
}

第1关：字符逆序
#include <stdio.h>
#include <string.h>

int main() {
	char str[100];
	scanf("%s", str);
	int len = strlen(str);
	for (int i = len - 1; i >= 0; i--) {
		printf("%c", str[i]);
	}
	return 0;
}

第2关：字符统计
题目描述:对于给定的一个字符串，统计其中数字字符出现的次数。
#include<stdio.h>
int main(void)
{
	int n,i,j,count;
	char s[10][50];
	scanf("%d",&n);
	for(i=0;i<n;i++)
	{
		scanf("%s",&s[i]);
	}
	for(i=0;i<n;i++)
	{
		count=0;
		for(j=0;s[i][j]!='\0';j++)
			if(s[i][j]>='0'&&s[i][j]<='9')
				count++;
		printf("%d\n",count);
	}
	return 0;
}

第3关：字符插入
输入两个字符串a和b，将b串中的最大字符插入到a串中最小字符后面。
#include<stdio.h>
#include<string.h>
int main(void)
{
	int i,j,m,n,x,y;
	int max,min;
	char a[50],b[50];
	gets(a);		
	gets(b);
	m=strlen(a);		
	n=strlen(b);
	for(i=0,min=a[0];i<m;i++)    
		if(a[i]<=min)   
		{
			min=a[i];
			x=i;
		}
	for(i=0,max=b[0];i<n;i++)	
		if(b[i]>=max)   
		{
			max=b[i];		
			y=i;
		}
	for(j=0;j<=x;j++)
		printf("%c",a[j]);
	printf("%c",b[y]);
	for(j=x+1;j<m;j++)
		printf("%c",a[j]);
	return 0;
}

第4关：字符串处理
#include<stdio.h>
#include<string.h>
int main(void)
{
	int i,j,m,n,num;
	char a[100],b[100];
	gets(a);		
	gets(b);
	m=strlen(a);		
	n=strlen(b);
	scanf("%d",&num);
	for(j=0;j<num;j++)
		printf("%c",a[j]);
	for(j=0;j<n;j++)
		printf("%c",b[j]);
	for(j=num;j<m;j++)
		printf("%c",a[j]);
	return 0;
}

第5关：字符串统计
题目描述:输入一段字符(由空格、字母和数字几种组成，保证开头不为空格)，里面有若干个字符串，求这些字符串的长度和，并输出最长字符串内容,如果有多个输出最先出现的那个字符串。以stop作为最后输入的字符串。
#include<stdio.h>
#include<string.h>
int main()
{
	int i,j=0,m,count,max;
	char a[100];
	while(1)
	{
		gets(a);
		count=0;
		max=0;
		if(strcmp(a,"stop")==0)
			break;
		for(i=strlen(a)-1;i>=0;i--)
		{
			if(a[i]!=' '&&i!=0)
			{
				j++;
				count++;
			}
			else if(a[i]==' '||i==0)
			{
				if(i==0)
				{
					j++;
					count++;
				}
				if(j>=max)
				{
					max=j;
					m=i;
					if(i==0)
						m=i-1;
				}
				j=0;
			}
		}
		printf("%d ",count);
		for(i=m+1;i<m+1+max;i++)
			printf("%c",a[i]);
		printf("\n");
	}
	
	
	/*********End**********/
	return 0;
}

第6关：字符串排序
输入3行，每行n个字符串，按由小到大的顺序输出
#include<stdio.h>
#include<string.h>
int main()
{
	char str1[20],str2[20],str3[20];
	gets(str1);
	gets(str2);
	gets(str3);
	if(strcmp(str1,str2)>0&&strcmp(str2,str3)>0)
	{
		puts(str3);
		puts(str2);
		puts(str1);
	}
	if(strcmp(str1,str2)>0&&strcmp(str2,str3)<0&&strcmp(str1,str3)>0)
	{
		puts(str2);
		puts(str3);
		puts(str1);
	}
	if(strcmp(str2,str1)>0&&strcmp(str1,str3)>0)
	{
		puts(str3);
		puts(str1);
		puts(str2);
	}
	if(strcmp(str2,str1)>0&&strcmp(str1,str3)<0&&strcmp(str2,str3)>0)
	{
		puts(str1);
		puts(str3);
		puts(str2);
	}
	if(strcmp(str3,str2)>0&&strcmp(str2,str1)>0)
	{
		puts(str1);
		puts(str2);
		puts(str3);
	}
	if(strcmp(str3,str2)>0&&strcmp(str2,str1)<0&&strcmp(str1,str3)>0)
	{
		puts(str2);
		puts(str1);
		puts(str3);
	}
	return 0;
}

第1关：排序问题
本关任务:将十个数进行从大到小的顺序进行排列
#include <stdio.h>
#include<math.h>
int main()
{
	int a[10];
	int n,i,m;
	for(i=0;i<10;i++)
		scanf("%d",&a[i]);
	printf("\n");
	for(m=0;m<9;m++)
	{
		for(i=0;i<9-m;i++)
		{
			if(a[i]<a[i+1])
			{
				n=a[i];
				a[i]=a[i+1];
				a[i+1]=n;
			}
		}
		
	}
	for(i=0;i<10;i++)
		printf("%d ",a[i]);
	printf("\n");
	return 0;
	
}

第2关：查找整数
给出一个包含n个整数的数列，问整数a在数列中的第一次出现是第几个。
#include<stdio.h>
int main()
{
	int m,n,i,j;
	int a[1000];
	int num=0;
	scanf("%d",&m);
	for(i=0; i<m; i++)
		scanf("%d", &a[i]);
	scanf("%d",&n);
	for(j=0; j<m; j++)
	{
		if(a[j]==n)
		{
			printf("%d",j+1);
			num=1;
			break;
		}
	}
	if(num==0)
		printf("-1");
	return 0;
}

第3关：计算数组中元素的最大值及其所在的行列下标值
按如下函数原型编程从键盘输入一个m行n列的二维数组，然后计算数组中元素的最大值及其所在的行列下标值。其中m和n的值由用户键盘输入。已知m和n的值都不超过10
#include<stdio.h>
int main(void)
{
	/*********Begin*********/
	int m,n,max,row,col;
	int i,j;
	int a[10][10];
	printf("Input m, n:");
	scanf("%d,%d",&m,&n);
	printf("Input %d*%d array:\n",m,n);
	for(i=0;i<m;i++)
	{
		for(j=0;j<n;j++)
		{
			scanf("%d",&a[i][j]);
		}
	}
	max=a[0][0];
	for(i=0;i<m;i++)
	{
		for(j=0;j<n;j++)
		{
			if(a[i][j]>=max)
			{
				max=a[i][j];
				row=i+1;
				col=j+1;
			}
		}
	}
	printf("max=%d, row=%d, col=%d\n",max,row,col);
	/*********End**********/
	return 0;
}

第4关：二分查找
将n个从小到大排序的整数（n<1000000）从1~n进行编号，并一个待查找的整数m，请使用二分法进行查找。
输入
输入包括3行，第一行为整数n，第二行包括n个整数，以空格分隔，第三行为整数m。
输出
如果能够在序列中找到整数m，则输出编号（如果存在多个编号，返回编号最小的），如果不存在，则输出None。

测试说明
#include<stdio.h>
int main()
{
	int n,a[100],m,x=0;
	int i,j;
	scanf("%d",&n);
	for(i=0;i<n;i++)
	{
		scanf("%d",&a[i]);
	}
	scanf("%d",&m);
	for(j=0;j<n;j++)
	{
		if(a[j]==m)
		{
			printf("%d",j+1);
			x=1;
			break;
		}
	}
	if(x==0)
		printf("None");
	return 0;
}

第5关：鞍点
找出具有m行n列二维数组Array的“鞍点”，即该位置上的元素在该行上最大，在该列上最小，其中1<=m,n<=10。
#include <stdio.h>

int main() {
	int m, n;
	scanf("%d%d", &m, &n);
	int a[m][n];
	// 读入数组
	for (int i = 0; i < m; i++) {
		for (int j = 0; j < n; j++) {
			scanf("%d", &a[i][j]);
		}
	}
	int flag = 0;
	for (int i = 0; i < m; i++) {
		for (int j = 0; j < n; j++) {
			int max_in_row = 1;
			int min_in_col = 1;
			for (int k = 0; k < n; k++) {
				if (a[i][k] > a[i][j]) {
					max_in_row = 0;
					break;
				}
			}
			// 判断该位置是否为该列最小值
			for (int k = 0; k < m; k++) {
				if (a[k][j] < a[i][j]) {
					min_in_col = 0;
					break;
				}
			}
			if (max_in_row && min_in_col) {
				printf("Array[%d][%d]=%d\n", i, j, a[i][j]);
				flag = 1;
				break;
			}
		}
		if (flag) {
			break;
		}
	}
	if (!flag) {
		printf("None\n");
	}
	return 0;
}

第6关：删除最大值
题目描述:输入10个互不相同的整数并保存在数组中，找到该最大元素并删除它，输出删除后的数组
#include<stdio.h>
#define N 10
int main(){
	int a[N],i,max=0;
	for(i=0;i<N;i++){
		scanf("%d",&a[i]);
		if(a[i]>a[max]) max=i;
	}
	for(i=max;i<N-1;i++){
		a[i]=a[i+1];
	}
	for(i=0;i<N-1;i++){
		printf("%d ",a[i]);
	}
	return 0;
}

第7关：杨辉三角
#include <stdio.h>

int main() {
	int n = 10;
	int a[20][20] = {0};
	for (int i = 1; i <= n; i++) {
		a[i][1] = 1;
		a[i][i] = 1;
		for (int j = 2; j < i; j++) {
			a[i][j] = a[i - 1][j - 1] + a[i - 1][j];
		}
	}
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= i; j++) {
			printf("%d", a[i][j]);
			if (j == i) {
				printf("\n");
			} else {
				printf(" ");
			}
		}
	}
	return 0;
}


