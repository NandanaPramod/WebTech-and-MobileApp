package com.session;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {

 protected void doPost(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException {

  response.setContentType("text/html");
  PrintWriter out = response.getWriter();

  String username = request.getParameter("username");

  HttpSession session = request.getSession();
  session.setAttribute("user", username);

  out.println("<h2>Welcome " + username + "</h2>");
  out.println("<a href='ProfileServlet'>Go to Profile</a>");
 }
}
