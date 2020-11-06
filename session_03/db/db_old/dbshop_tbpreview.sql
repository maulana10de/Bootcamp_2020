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
-- Table structure for table `tbpreview`
--

DROP TABLE IF EXISTS `tbpreview`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbpreview` (
  `idpreview` int(11) NOT NULL AUTO_INCREMENT,
  `idproduct` int(11) NOT NULL,
  `image` varchar(200) NOT NULL,
  PRIMARY KEY (`idpreview`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbpreview`
--

LOCK TABLES `tbpreview` WRITE;
/*!40000 ALTER TABLE `tbpreview` DISABLE KEYS */;
INSERT INTO `tbpreview` VALUES (1,1,'https://kickz.akamaized.net/en/media/images/p/1200/nike-W_AIR_MAX_90-WHITE_PARTICLE_GREY_ROSE_BLACK-1.jpg'),(2,1,'https://kickz.akamaized.net/en/media/images/p/1200/nike-W_AIR_MAX_90-WHITE_PARTICLE_GREY_ROSE_BLACK-2.jpg'),(3,1,'https://kickz.akamaized.net/en/media/images/p/1200/nike-W_AIR_MAX_90-WHITE_PARTICLE_GREY_ROSE_BLACK-3.jpg'),(4,1,'https://kickz.akamaized.net/en/media/images/p/1200/nike-W_AIR_MAX_90-WHITE_PARTICLE_GREY_ROSE_BLACK-4.jpg'),(5,1,'https://kickz.akamaized.net/en/media/images/p/1200/nike-W_AIR_MAX_90-WHITE_PARTICLE_GREY_ROSE_BLACK-5.jpg'),(6,1,'https://kickz.akamaized.net/en/media/images/p/1200/nike-W_AIR_MAX_90-WHITE_PARTICLE_GREY_ROSE_BLACK-6.jpg'),(7,2,'https://kickz.akamaized.net/en/media/images/p/1200/JORDAN_WESTBROOK_ONE_TAKE-WHITE_WHITE_BLACK_RAGE_GREEN-1.jpg'),(8,2,'https://kickz.akamaized.net/en/media/images/p/1200/JORDAN_WESTBROOK_ONE_TAKE-WHITE_WHITE_BLACK_RAGE_GREEN-2.jpg'),(9,2,'https://kickz.akamaized.net/en/media/images/p/1200/JORDAN_WESTBROOK_ONE_TAKE-WHITE_WHITE_BLACK_RAGE_GREEN-3.jpg'),(10,2,'https://kickz.akamaized.net/en/media/images/p/1200/JORDAN_WESTBROOK_ONE_TAKE-WHITE_WHITE_BLACK_RAGE_GREEN-4.jpg'),(11,2,'https://kickz.akamaized.net/en/media/images/p/1200/JORDAN_WESTBROOK_ONE_TAKE-WHITE_WHITE_BLACK_RAGE_GREEN-5.jpg'),(12,2,'https://kickz.akamaized.net/en/media/images/p/1200/JORDAN_WESTBROOK_ONE_TAKE-WHITE_WHITE_BLACK_RAGE_GREEN-6.jpg'),(13,3,'https://kickz.akamaized.net/en/media/images/p/1200/nike-KYRIE_6-WHITE_BLUE_FURY_OPTI_YELLOW_DIGITAL_PINK-1.jpg'),(14,3,'https://kickz.akamaized.net/en/media/images/p/1200/nike-KYRIE_6-WHITE_BLUE_FURY_OPTI_YELLOW_DIGITAL_PINK-2.jpg'),(15,3,'https://kickz.akamaized.net/en/media/images/p/1200/nike-KYRIE_6-WHITE_BLUE_FURY_OPTI_YELLOW_DIGITAL_PINK-3.jpg'),(16,3,'https://kickz.akamaized.net/en/media/images/p/1200/nike-KYRIE_6-WHITE_BLUE_FURY_OPTI_YELLOW_DIGITAL_PINK-4.jpg'),(17,3,'https://kickz.akamaized.net/en/media/images/p/1200/nike-KYRIE_6-WHITE_BLUE_FURY_OPTI_YELLOW_DIGITAL_PINK-5.jpg'),(18,3,'https://kickz.akamaized.net/en/media/images/p/1200/nike-KYRIE_6-WHITE_BLUE_FURY_OPTI_YELLOW_DIGITAL_PINK-6.jpg');
/*!40000 ALTER TABLE `tbpreview` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-05 20:58:59
