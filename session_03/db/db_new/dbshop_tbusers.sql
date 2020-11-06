-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: dbshop
-- ------------------------------------------------------
-- Server version	5.7.31-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbusers`
--

DROP TABLE IF EXISTS `tbusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbusers` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` varchar(45) DEFAULT 'user',
  `status` varchar(45) NOT NULL DEFAULT 'noverify',
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbusers`
--

LOCK TABLES `tbusers` WRITE;
/*!40000 ALTER TABLE `tbusers` DISABLE KEYS */;
INSERT INTO `tbusers` VALUES (1,'user01','user01@mail.com','081287928317','69ec940cba7a886a6d0aec9bddc47f6e4ce713ea9e2a9f96c6f230cc75780f64','user','verified'),(2,'admin','admin@mail.com','081222222222','0d0cf6bc0cbca8f8effbf42d4a40d790777421f202bf4f090b9a10325a04c65a','admin','verified'),(3,'user02','user02@mail.com','081289310273','69ec940cba7a886a6d0aec9bddc47f6e4ce713ea9e2a9f96c6f230cc75780f64','user','verified'),(27,'user24','user24@mail.com','081287928317','69ec940cba7a886a6d0aec9bddc47f6e4ce713ea9e2a9f96c6f230cc75780f64','user','verified'),(28,'user04','user04@mail.com','081283619231','69ec940cba7a886a6d0aec9bddc47f6e4ce713ea9e2a9f96c6f230cc75780f64','user','verified'),(29,'user90','user90@mail.com','0813486194810','69ec940cba7a886a6d0aec9bddc47f6e4ce713ea9e2a9f96c6f230cc75780f64','user','verified');
/*!40000 ALTER TABLE `tbusers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-05 22:06:39
