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
-- Table structure for table `tbstock`
--

DROP TABLE IF EXISTS `tbstock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbstock` (
  `idstock` int(11) NOT NULL AUTO_INCREMENT,
  `idproduct` int(11) NOT NULL,
  `idsize` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  PRIMARY KEY (`idstock`),
  KEY `fkstock_idx` (`idproduct`),
  KEY `fkstocksize_idx` (`idsize`),
  CONSTRAINT `fkstock` FOREIGN KEY (`idproduct`) REFERENCES `tbproducts` (`idproduct`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fkstocksize` FOREIGN KEY (`idsize`) REFERENCES `tbsize` (`idsize`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbstock`
--

LOCK TABLES `tbstock` WRITE;
/*!40000 ALTER TABLE `tbstock` DISABLE KEYS */;
INSERT INTO `tbstock` VALUES (1,1,1,5),(2,1,2,10),(3,1,3,15),(4,1,4,20),(5,1,5,10),(6,1,6,5),(7,2,1,5),(8,2,2,7),(9,2,3,7),(10,2,4,8),(11,2,5,10),(12,2,6,50),(13,3,1,55),(14,3,2,40),(15,3,3,65),(16,3,4,80),(17,3,5,10),(18,3,6,50);
/*!40000 ALTER TABLE `tbstock` ENABLE KEYS */;
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
