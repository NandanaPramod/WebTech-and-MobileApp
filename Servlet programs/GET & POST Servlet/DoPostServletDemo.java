package com.demo;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/DoPostServletDemo")
public class DoPostServletDemo extends HttpServlet {

 protected void doGet(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException {

  response.setContentType("text/html");
  PrintWriter out = response.getWriter();

  String name = request.getParameter("name");
  String age = request.getParameter("age");

  out.println("<html><body>");
  out.println("<h2>GET Method Output</h2>");
  out.println("Name: " + name + "<br>");
  out.println("Age: " + age + "<br>");
  out.println("<a href='index.html'>Back</a>");
  out.println("</body></html>");
 }

 protected void doPost(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException {

  response.setContentType("text/html");
  PrintWriter out = response.getWriter();

  String name = request.getParameter("name");
  String age = request.getParameter("age");

  out.println("<html><body>");
  out.println("<h2>POST Method Output</h2>");
  out.println("Name: " + name + "<br>");
  out.println("Age: " + age + "<br>");
  out.println("<a href='index.html'>Back</a>");
  out.println("</body></html>");
 }
}
