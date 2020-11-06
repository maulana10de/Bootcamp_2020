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
-- Table structure for table `tbproducts`
--

DROP TABLE IF EXISTS `tbproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbproducts` (
  `idproduct` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `colour` varchar(45) NOT NULL,
  `description` varchar(700) NOT NULL,
  `price` int(11) NOT NULL,
  `status` varchar(45) DEFAULT 'Ready',
  PRIMARY KEY (`idproduct`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbproducts`
--

LOCK TABLES `tbproducts` WRITE;
/*!40000 ALTER TABLE `tbproducts` DISABLE KEYS */;
INSERT INTO `tbproducts` VALUES (1,'NIKE W AIR MAX 90','NIKE','WHITE/PARTICLE GREY-ROSE-BLACK','When it comes to basketball, there is no way around Nike – the brand with the Swoosh belongs to the game like dunks, three-pointers and cross-overs. Whether in the NBA, European leagues or your neighborhood ...',1987300,'Ready'),(2,'JORDAN WESTBROOK ONE TAKE','JORDAN','WHITE/WHITE-BLACK-RAGE GREEN','In the game of basketball Michael Jordan is a god. Number 23 of the Chicago Bulls has set the bar extremely high: His six championship rings, five mvp`s, numerous scoring titles, not to mention his ...',1500000,'Ready'),(3,'NIKE KYRIE 6','NIKE','WHITE/BLUE FURY-OPTI YELLOW-DIGITAL PINK','The NIKE KYRIE 6 is the latest addition to the signature performance line of Kyrie Irving and Nike. If you think about Uncle Drew, immediately the explosive dribblings and his speed of direction changees of the impersonated ankle breaker comes into mind.',1780000,'Ready');
/*!40000 ALTER TABLE `tbproducts` ENABLE KEYS */;
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
